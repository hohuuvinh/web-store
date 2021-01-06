<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('note');
            $table->text('content');
            $table->text('feature');
            $table->text('sale');
            $table->string('image');
            $table->integer('active');
            $table->integer('type');
            $table->string('image1');
            $table->string('image2');
            $table->string('image3');
            $table->date('created_at');
            $table->string('slug');
            $table->string('linkdemo');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts');
    }
}
