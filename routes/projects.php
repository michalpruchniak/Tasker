 <?php

    use App\Http\Controllers\ProjectController;
    use Illuminate\Support\Facades\Route;

    Route::get('/projects', [ProjectController::class, 'index'])
        ->name('project.index')
        ->middleware('auth');

    Route::get('/projects/{id}', [ProjectController::class, 'tasksFromProject'])
        ->name('tasks.index')
        ->middleware('auth');

    Route::get('/projects/create', [ProjectController::class, 'create'])
        ->name('project.create')
        ->middleware('auth');

    Route::post('/projects/store', [ProjectController::class, 'store'])
        ->name('project.store')
        ->middleware('auth');
