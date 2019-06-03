<?php
require "vendor/autoload.php";


use model\PDOTaskModel;
use view\JsonTaskView;
use view\JsonTasksView;
use controller\TaskController;

$user = 'root';
$password = '';
$database = 'laravel_webadv';
$server = 'localhost';
$pdo = null;
try {
    $pdo = new PDO("mysql:host=$server;dbname=$database", $user, $password);
    $pdo->setAttribute(
        PDO::ATTR_ERRMODE,
        PDO::ERRMODE_EXCEPTION
    );
} catch (Exception $e) {
    http_response_code(500);
    exit();
}

$taskModel = new PDOTaskModel($pdo);
$jsonTaskView = new JsonTaskView();
$jsonTaskView = new JsonTasksView();
$taskController = new TaskController($taskModel, $jsonTaskView, $jsonTaskView);


$router = new AltoRouter();
$router->setBasePath('/api/');

$router->map(
    'GET',
    'tasks/',
    function () use ($taskController) {
        $taskController->listTasks();
    }
);

$router->map('POST', 'tasks/create/', function () use ($taskController) {
    $_POST = json_decode(file_get_contents('php://input'));

    $task = null;

    if (isset($_POST->note) && isset($_POST->category) && isset($_POST->date) && isset($_POST->dueDate)) {
        $task->note = $_POST->note;
        $task->category = $_POST->category;
        $task->date = $_POST->date;
        $task->dueDate = $_POST->dueDate;
    }

    $taskController->addTask($task);
});

$match = $router->match();
if ($match && is_callable($match['target'])) {
    call_user_func_array($match['target'], $match['params']);
} else {
    http_response_code(400);
}
