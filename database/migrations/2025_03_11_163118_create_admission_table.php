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
        Schema::create('admission', function (Blueprint $table) {
            $table->id();
            $table->string('student_id');
            $table->boolean('confirmed');
            $table->timestamp('created_at')
                  ->default(now());
        });
        Schema::create('admission_reason', function (Blueprint $table) {
            $table->integer('admission_id');
            $table->string('student_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('admission');
        Schema::dropIfExists('admission_reason');
    }
};
