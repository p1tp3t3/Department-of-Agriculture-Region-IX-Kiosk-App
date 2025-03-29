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
        Schema::create('complaint', function (Blueprint $table) {
            $table->integer('case_number')
                  ->autoIncrement();
            $table->string('complainant_id', 15);
            $table->string('student_id', 15);
            $table->text('complaint_description');
            $table->boolean('confirmed')
                  ->nullable();
            $table->enum('complaint_status', ['pending', 'ongoing', 'solved', 'closed']);
            $table->text('complaint_summary')
                  ->nullable();
            $table->timestamp('created_at')
                  ->default(DB::raw('CURRENT_TIMESTAMP'));
        
            $table->foreign('complainant_id')
                  ->references('user_id')
                  ->on('users');
            $table->foreign('student_id')
                  ->references('user_id')
                  ->on('users');
        });
        Schema::create('complaint_possible_offense', function (Blueprint $table) {
            $table->integer('complaint_case_number');
            $table->string('possible_offense');
            $table->foreign('complaint_case_number')
                  ->references('case_number')
                  ->on('complaint')
                  ->cascadeOnDelete();
        });
        Schema::create('complaint_evidence_file', function (Blueprint $table) {
            $table->integer('complaint_case_number');
            $table->string('file_type', 3);
            $table->string('evidence_file');
            $table->foreign('complaint_case_number')
                  ->references('case_number')
                  ->on('complaint')
                  ->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('complaint');
        Schema::dropIfExists('complaint_possible_offense');
        Schema::dropIfExists('complaint_evidence_file');
    }
};
