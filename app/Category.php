<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    private $table = 'categories';
    private $fillable = ['name'];
}
