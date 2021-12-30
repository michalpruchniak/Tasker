<?php

    use App\Http\Controllers\TaskController;
    use Illuminate\Support\Facades\Route;

    Route::get('/tasks', [TaskController::class, 'index'])
                            ->name('tasks.index')
                            ->middleware('auth');

    Route::get('/tasks/create', [TaskController::class, 'create'])
                            ->name('tasks.create')
                            ->middleware('auth');

    Route::get('/tasks/create/{id}', [TaskController::class, 'create'])
                            ->name('tasks.create')
                            ->middleware('auth');

    Route::post('/tasks/store', [TaskController::class, 'store'])
                            ->name('tasks.store')
                            ->middleware('auth');

    Route::get('/tasks/toggle-complete/{id}', [TaskController::class, 'toggleComplete'])
                            ->name('tasks.toggleComplete')
                            ->middleware('auth');
