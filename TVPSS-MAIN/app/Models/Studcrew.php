<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
//use Illuminate\Database\Eloquent\Model;
use MongoDB\Laravel\Eloquent\Model as Model;

class Studcrew extends Model
{
    use HasFactory;

    protected $table = 'studcrew';

    protected $guarded = [
        'id',
        'jawatan',
        'status',
        'student_id',
    ];

    public function student()
    {
        return $this->belongsTo(Student::class, 'student_id');
    }
}
