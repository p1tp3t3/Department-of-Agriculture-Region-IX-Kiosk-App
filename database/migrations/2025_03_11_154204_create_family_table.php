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
        Schema::create('family', function (Blueprint $table) {
            $table->id();
            $table->string('family_name', 25);
            $table->timestamp('created_at');
        });
        Schema::create('family_member', function (Blueprint $table) {
            $table->foreignId('family_id')
                  ->references('id')
                  ->on('family')
                  ->cascadeOnDelete();
            $table->string('parent_id', 15)
                  ->nullable();
            $table->string('child_id', 15)
                  ->nullable();

            $table->foreign('parent_id')
                  ->references('user_id')
                  ->on('users')
                  ->cascadeOnUpdate();
            $table->foreign('child_id')
                  ->references('user_id')
                  ->on('users')
                  ->cascadeOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('family');
        Schema::dropIfExists('family_member');
    }
};
