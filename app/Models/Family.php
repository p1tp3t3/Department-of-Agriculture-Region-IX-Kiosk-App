<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;


class Family extends Model
{
    /** @use HasFactory<\Database\Factories\FamilyFactory> */
    use HasFactory;

    public $table = 'family', 
           $fillable = ['family_name'];

    public function familyMember() {
        return $this->hasMany(FamilyMember::class, 'family_id', 'family_id');
    }
}
