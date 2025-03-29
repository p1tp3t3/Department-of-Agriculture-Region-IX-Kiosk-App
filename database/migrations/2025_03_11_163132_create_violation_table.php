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
        Schema::create('violation', function (Blueprint $table) {
            $table->id();
            $table->string('violation_name');
            $table->text('description');
            $table->enum('offense_status', ['major', 'minor']);
            $table->timestamp('created_at')
                  ->default(now());
        });
        Schema::create('complaint_violation', function (Blueprint $table) {
            $table->integer('complaint_case_number');
            $table->integer('violation_id');
            $table->timestamp('created_at')
                  ->default(now());
        });
        Schema::create('penalty', function (Blueprint $table) {
            $table->double('id')
                  ->primary();
            $table->text('description');
            $table->timestamp('created_at')
                  ->default(now());
        });
        Schema::create('violation_penalty', function (Blueprint $table) {
            $table->integer('violation_id');
            $table->integer('occurence');
            $table->double('penalty_id');
            $table->string('other_penalty');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('violation');
        Schema::dropIfExists('complaint_violation');
        Schema::dropIfExists('penalty');
        Schema::dropIfExists('violation_penalty');
    }
};
