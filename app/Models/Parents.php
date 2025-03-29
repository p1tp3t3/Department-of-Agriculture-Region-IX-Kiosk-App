<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Carbon\Carbon;

class Parents extends Model
{
    /** @use HasFactory<\Database\Factories\ParentFactory> */
    use HasFactory;

    public $timestamps = false;
    public $table = 'parent', 
           $fillable = ['user_id', 'first_name', 'middle_name', 'last_name', 'sex'];

    public function user() {
        return $this->hasOne(User::class, 'user_id', 'id');
    }
}
