<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Staff extends Model
{
    /** @use HasFactory<\Database\Factories\StaffFactory> */
    use HasFactory;

    public $timestamps = false;
    public $table = 'staff', 
           $fillable = ['user_id', 'work_type'];

    public function user() {
        return $this->hasOne(User::class, 'user_id', 'id');
    }
}
