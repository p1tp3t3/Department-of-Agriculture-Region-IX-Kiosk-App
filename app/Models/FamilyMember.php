<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class FamilyMember extends Model
{
    /** @use HasFactory<\Database\Factories\FamilyMemberFactory> */
    use HasFactory;

    public $table = 'family_member',
           $fillable = ['family_id', 'parent_id', 'child_id'];
    
    public function family() {
        return $this->belongsTo(Family::class, 'family_id', 'family_id');
    }
    public function parent() {
        return $this->hasOne(Parents::class, 'parent_id', 'pilar_id');
    }
    public function child() {
        return $this->hasMany(Student::class, 'child_id', 'pilar_id');
    }
}
