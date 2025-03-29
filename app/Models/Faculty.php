<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Carbon\Carbon;

class Faculty extends Model
{
    /** @use HasFactory<\Database\Factories\FacultyFactory> */
    use HasFactory;

    public $timestamps = false;
    public $table = 'faculty', 
           $fillable = ['user_id', 'faculty_type', 'program_id'];

    public function user() {
        return $this->hasOne(User::class, 'user_id', 'id');
    }
}
