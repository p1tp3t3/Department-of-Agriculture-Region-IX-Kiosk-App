<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('program', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('logo')
                  ->nullable();
            $table->text('description');
            $table->timestamp('created_at')
                  ->default(DB::raw('CURRENT_TIMESTAMP'));
        });
        /*
        INSERT program VALUES
        ('', 'BSIT',NULL,'Bachelor of Science in Information Technology', NULL),
        ('', 'BLIS',NULL,'Bachelor of Library and Information Science', NULL),
        ('', 'BEED',NULL,'Bachelor of Elementary Education', NULL),
        ('', 'BSN',NULL,'Bachelor of Science in Nursing', NULL),
        ('', 'BSHM',NULL,'Bachelor of Science in Hospitality Management', NULL),
        ('', 'BSBA',NULL,'Bachelor of Science in Business Administration', NULL),
        ('', 'BSTM',NULL,'Bachelor of Science in Tourism Management', NULL);
        */

        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('user_id', 15)
                  ->unique();
            $table->enum('user_type', ['student', 'itrc', 'prefect', 'faculty', 'staff', 'parent', 'administrative']);
            $table->string('first_name');
            $table->string('middle_name');
            $table->string('last_name');
            $table->string('anonymous_name')
                  ->unique();
            $table->string('profile_picture');
            $table->string('anonymous_profile_picture');
            $table->integer('age');
            $table->enum('sex', ['m', 'f']);
            $table->date('date_of_birth');
            $table->text('bio_description')
                  ->nullable();
            $table->string('civil_status')
                  ->nullable();
            $table->string('religion')
                  ->nullable();
            $table->string('citizenship')
                  ->nullable();
            $table->string('current_address')
                  ->nullable();
            $table->string('permanent_address')
                  ->nullable();
            $table->string('email')
                  ->unique()
                  ->nullable();
            $table->string('contact_number', 11)
                  ->nullable();
            $table->string('username');
            $table->text('password');
            $table->boolean('activate')
                  ->default(FALSE);
            $table->rememberToken();
            $table->string('password_reset_token', 15)
                  ->nullable();
            $table->timestamp('created_at')
                  ->default(DB::raw('CURRENT_TIMESTAMP'));
        });
        Schema::create('sessions', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->foreignId('user_id')
                  ->nullable()
                  ->index();
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->longText('payload');
            $table->integer('last_activity')->index();
        });

        Schema::create('student', function (Blueprint $table) {
            $table->string('user_id', 15);
            $table->foreignId('program_id')
                  ->nullable()
                  ->references('id')
                  ->on('program')
                  ->nullOnDelete()
                  ->cascadeOnUpdate();
            $table->integer('year_level');

            $table->foreign('user_id')
                  ->references('user_id')
                  ->on('users');
        });
        Schema::create('education_background', function (Blueprint $table) {
            $table->id();
            $table->string('student_id', 15);
            $table->string('education_type');
            $table->string('school_address');
            $table->string('program')
                  ->nullable();
            $table->string('year_level');
            $table->boolean('transferee')
                  ->default(FALSE);
            $table->foreign('student_id')
                  ->references('user_id')
                  ->on('users');
        });
        Schema::create('parent', function (Blueprint $table) {
            $table->string('user_id', 15);
            $table->string('parent_role');
            $table->string('work_occupation');
            $table->foreign('user_id')
                  ->references('user_id')
                  ->on('users');
        });
        Schema::create('faculty', function (Blueprint $table) {
            $table->string('user_id', 15);
            $table->string('faculty_type');
            
            $table->foreignId('program_id')
                  ->nullable()
                  ->references('id')
                  ->on('program')
                  ->nullOnDelete()
                  ->cascadeOnUpdate();
            $table->foreign('user_id')
                  ->references('user_id')
                  ->on('users');
        });
        Schema::create('itrc', function (Blueprint $table) {
            $table->string('user_id', 15);
            $table->boolean('active')
            ->default(FALSE);
            $table->string('user_update_token', 11);
            $table->foreign('user_id')
                  ->references('user_id')
                  ->on('users');
        });
        Schema::create('prefect', function (Blueprint $table) {
            $table->string('user_id', 15);
            $table->boolean('active')
                ->default(FALSE);
            $table->string('direct_action_token', 11);
            $table->foreign('user_id')
                  ->references('user_id')
                  ->on('users');
        });
        Schema::create('staff', function (Blueprint $table) {
            $table->string('user_id', 15);
            $table->string('work_type');
            $table->foreign('user_id')
                  ->references('user_id')
                  ->on('users');
        });
        Schema::create('administrative', function (Blueprint $table) {
            $table->string('user_id', 15);
            $table->string('type');
            $table->foreignId('program_id')
                  ->nullable()
                  ->references('id')
                  ->on('program')
                  ->nullOnDelete()
                  ->cascadeOnUpdate();
            $table->foreign('user_id')
                  ->references('user_id')
                  ->on('users');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('program');
        Schema::dropIfExists('student');
        Schema::dropIfExists('itrc');
        Schema::dropIfExists('prefect');
        Schema::dropIfExists('parent');
        Schema::dropIfExists('faculty');
        Schema::dropIfExists('staff');
        Schema::dropIfExists('users');
        Schema::dropIfExists('sessions');
    }
};
