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
        Schema::create('notification', function (Blueprint $table) {
            $table->id();
            $table->string('sender_id');
            $table->string('receiver_id');
            $table->enum(
                'notif_type', 
                ['complaint', 'referral', 'admission', 'violation', 'appointment', 'gatepass', 'call_in']
            );
            $table->text('content');
            $table->timestamp('read_since')
                  ->nullable();
            $table->timestamp('created_at')
                  ->default(DB::raw('CURRENT_TIMESTAMP'));
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('notification');
    }
};
