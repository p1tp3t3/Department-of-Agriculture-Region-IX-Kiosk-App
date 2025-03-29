<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Program extends Model
{
    public $table = 'program',
           $fillable = ['program', 'acronym', 'program_head_id'];

    public function faculty() {
        return $this->hasMany(Faculty::class, 'id', 'program_id');
    }
    public function student() {
        return $this->hasMany(Student::class, 'id', 'program_id');
    }
}
