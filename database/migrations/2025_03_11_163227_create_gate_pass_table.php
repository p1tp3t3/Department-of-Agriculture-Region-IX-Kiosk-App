<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('gate_pass', function (Blueprint $table) {
            $table->id();
            $table->string('user_id');
            $table->string('qrcode_source_code')
                  ->unique();
            $table->boolean('confirmed')
                  ->nullable();
            $table->timestamp('confirmed_at')
                  ->nullable();
            $table->timestamp('date_time_expiration')
                  ->nullable();
            $table->timestamp('created_at')
                  ->default(now());
        });
        Schema::create('gate_pass_reason', function (Blueprint $table) {
            $table->integer('gatepass_id');
            $table->text('reason');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('gate_pass');
        Schema::dropIfExists('gate_pass_reason');
    }
};
