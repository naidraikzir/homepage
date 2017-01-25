<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Meta extends Model
{
    protected $table = 'metas';
    protected $fillable = ['content', 'metaable_id', 'metaable_type'];
}
