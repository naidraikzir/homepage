<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $table = 'posts';
    protected $fillable = [
    	'title', 'excerpt', 'content', 'featured_image', 'status', 'slug', 'category_id'
    ];
}
