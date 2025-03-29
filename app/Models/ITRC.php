<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Carbon\Carbon;

class ITRC extends Model
{
    /** @use HasFactory<\Database\Factories\ITRCFactory> */
    use HasFactory;
    
    public $timestamps = false;
    public $table = 'itrc', 
           $fillable = ['user_id', 'update_user_token', 'active'];
    
    public function user() {
        return $this->hasOne(User::class, 'user_id', 'id');
    }
}
