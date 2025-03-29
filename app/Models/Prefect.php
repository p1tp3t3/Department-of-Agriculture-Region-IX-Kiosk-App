<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Carbon\Carbon;

class Prefect extends Model
{
    /** @use HasFactory<\Database\Factories\PrefectFactory> */
    use HasFactory;

    public $timestamps = false;
    public $table = 'prefect', 
           $fillable = ['user_id', 'active', 'direct_action_token'];

    public function user() {
        return $this->hasOne(User::class, 'user_id', 'id');
    }
}
