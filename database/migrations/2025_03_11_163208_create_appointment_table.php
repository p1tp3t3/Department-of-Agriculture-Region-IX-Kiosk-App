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
        Schema::create('appointment', function (Blueprint $table) {
            $table->id();
            $table->string('user_id');
            $table->string('appointment_title');
            $table->timestamp('date_time_appoint');
            $table->text('description');
            $table->boolean('canceled')
                  ->nullable();
            $table->timestamp('canceled_at')
                  ->nullable();
            $table->timestamp('created_at')
                  ->default(now());
        });
        Schema::create('appointment_request', function (Blueprint $table) {
            $table->id();
            $table->string('user_id');
            $table->integer('appointment_id')
                  ->nullable();
            $table->string('appointment_title');
            $table->enum('request_type', ['schedule', 'reschedule', 'cancel']);
            $table->timestamp('date_time_appoint');
            $table->text('description');
            $table->boolean('confirmed')
                  ->nullable();
            $table->timestamp('confirmed_at')
                  ->default(now());
            $table->timestamp('created_at')
                  ->default(now());
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('appointment');
    }
};
