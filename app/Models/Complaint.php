<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Complaint extends Model
{
    public $table = 'complaint';

    public $fillable = [
        'complainant_id',
        'student_id',
        'complaint_description',
        'status',
        'confirmed',
        'complaint_summary',
        'confirmed'
    ];



    public function user() {
        return $this->belongsTo(User::class, 'complainant_id', 'user_id');
    }
    public function subject() {
        return $this->belongsTo(User::class, 'student_id', 'user_id');
    }
    public function complaintPossibleOffense() {
        //$this->hasMany()
    }

    public function complaintEvidenceFile() {
        return $this->hasMany(ComplaintEvidenceFile::class, 'complaint_case_number', 'case_number');
    }
}
