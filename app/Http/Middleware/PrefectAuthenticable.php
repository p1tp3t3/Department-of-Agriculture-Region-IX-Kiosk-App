<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Inertia\Inertia;

class PrefectAuthenticable
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if((auth()->check() && auth()->user()->user_type != 'prefect') || !auth()->check()) {
            return Inertia::location(route('type.user'));
        }
        return $next($request);
    }
}
