<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EducationBackground extends Model
{
    public $table = 'education_background';
    public $timestamps = false;
    public $fillable = ['student_id'];

}
