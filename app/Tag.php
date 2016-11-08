<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    private $table = 'tags';
    private $fillable = ['name', 'taggable_id', 'taggable_type'];
}
