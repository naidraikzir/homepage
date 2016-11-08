<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    private $table = 'posts';
    private $fillable = ['title', 'content', 'status', 'category_id'];
}
