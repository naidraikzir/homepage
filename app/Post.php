<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $table = 'posts';
    protected $fillable = ['title', 'content', 'status', 'category_id'];


	// Mutators
	public function setContentAttribute($value)
	{
		$this->attributes['content'] = htmlspecialchars($value, ENT_QUOTES);
	}


	// Accessors
	public function getContentAttribute($value)
	{
		return htmlspecialchars_decode($value, ENT_QUOTES);
	}
}
