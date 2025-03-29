<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Carbon\Carbon;

class Student extends Model
{
    /** @use HasFactory<\Database\Factories\StudentFactory> */
    use HasFactory;

    public $timestamps = false;
    public $table = 'student', 
           $fillable = ['user_id', 'program_id', 'year_level'];

    public function user() {
        return $this->hasOne(User::class, 'user_id', 'id');
    }
    public function program() {
        return $this->belongsTo(Program::class, 'program_id', 'id');
    }
}
