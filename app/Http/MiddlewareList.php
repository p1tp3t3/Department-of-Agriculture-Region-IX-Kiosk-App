<?php

return [
    'activate' => \App\Http\Middleware\Activation::class,
    'auth' => \App\Http\Middleware\Authenticable::class,
    
    'user' => [
        'itrc' => \App\Http\Middleware\ITRCAuthenticable::class,
        'student' => \App\Http\Middleware\StudentAuthenticable::class,
        'prefect' => \App\Http\Middleware\PrefectAuthenticable::class,
        'faculty' => \App\Http\Middleware\FacultyAuthenticable::class,
        'non_teaching_staff' => \App\Http\Middleware\NonTeachingStaffAuthenticable::class,
        'parent' => \App\Http\Middleware\ParentAuthenticable::class
    ],
    
    'access' => [
        'complaint' => NULL,
        'referral' => NULL,
        'admission' => NULL,
        'appointment' => NULL,
        'gate-pass' => NULL,
        'violation' => NULL
    ]
];