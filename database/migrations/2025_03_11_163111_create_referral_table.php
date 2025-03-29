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
        Schema::create('referral', function (Blueprint $table) {
            $table->id();
            $table->string('faculty_id');
            $table->string('referred_student_id');
            $table->text('reason_description');
            $table->timestamp('created_at')
                  ->default(now());
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('referral');
    }
};
