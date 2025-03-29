<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    public $timestamps = true;

    const UPDATED_AT = null;
    protected $fillable = [
        'user_id',
        'user_type',
        'first_name',
        'middle_name',
        'last_name',
        'date_of_birth',
        'sex',
        'username',
        'email',
        'contact_number',
        'password',
        'anonymous_name',
        'profile_picture',
        'anonymous_profile_picture',
        'activate',
        'password_reset_token'
    ];
    public $table = 'users';
    public $rel = [
        'student', 
        'itrc', 
        'prefect', 
        'parent', 
        'faculty', 
        'staff'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'password' => 'hashed',
        ];
    }
    
    protected static function booted() {
        static::creating(function ($u) {
            $date = $u->date_of_birth;
            $computedAge = Carbon::parse($date)->age;
            
            $u->age =  $computedAge;
        });
    }
    public function findAccount($id) {
        return $this->where('username', $id)
                    ->first();
    }
    public function findAccountContactDetail($username) {
        return $this->select('email', 'contact_number')
                    ->where('username', $username)
                    ->first();
    }
    public function newUsers() {
        return $this->with($this->rel)
                    ->where('id', '!=', auth()->user()->id)
                    ->whereRaw("DATE(created_at) = DATE(NOW())")
                    ->latest()
                    ->get();
    }
    public function active($l) {
        return $this->where('id', '!=', auth()->user()->id)
                    ->where('active', true)
                    ->where('activate', true)
                    ->limit($l)
                    ->get();
    }
    public function allUserAccount($l = 0) {
        $data = null;
        if($l != 0) {
            global $data;
            $data = $this->where('id', '!=', auth()->user()->id)
                         ->latest('created_at')      
                         ->paginate($l);
        }else {
            global $data;
            $data = $this->where('id', '!=', auth()->user()->id)
                         ->latest('created_at')
                         ->get();
        }

        return [
            'user' => auth()->user(),
            'itrc' => auth()->user()[auth()->user()->user_type],
            'account_list' => $data,
        ];                           
    }
    public function getAllStudent() {
        return $this->where('user_type', 'student') 
                    ->latest('created_at')
                    ->get();
    }
    public function getContact($username) {
        $usr = $this->select('email', 'contact_number')
                    ->where('username', $username);
        if($usr->exists()) {
            return $usr->first();
        }else {
            $id = $this->select('email', 'phone_number')
                       ->where("user_id", $username);
            return $id->first();
        }
    }
    public function itrc() {
        return $this->belongsTo(ITRC::class, 'user_id', 'user_id');
    }
    public function student() {
        return $this->belongsTo(Student::class, 'user_id', 'user_id');
    }
    public function prefect() {
        return $this->belongsTo(Prefect::class, 'user_id', 'user_id');
    }
    public function faculty() {
        return $this->belongsTo(Faculty::class, 'user_id', 'user_id');
    }
    public function staff() {
        return $this->belongsTo(Staff::class, 'user_id', 'user_id');
    }
    public function parent() {
        return $this->belongsTo(Parents::class, 'user_id', 'user_id');
    }
    public function complainant() {
        return $this->hasMany(Complaint::class, 'complainant_id', 'user_id');
    }
    public function complaintSubject() {
        return $this->hasMany(Complaint::class, 'student_id', 'user_id');
    }
}
