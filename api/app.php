<?php
require "vendor/autoload.php";


use model\PDOTaskModel;
use view\JsonTaskView;
use view\JsonTasksView;
use controller\TaskController;

$user = 'root';
$password = 'root';
$database = 'persondb';
$server = 'localhost';
$pdo = null;
try {
    $pdo = new PDO("mysql:host=$server;dbname=$database", $user, $password);
    $pdo->setAttribute(
        PDO::ATTR_ERRMODE,
        PDO::ERRMODE_EXCEPTION
    );
} catch (Exception $e){
    http_response_code(500);
    exit();
}

$personModel = new PDOTaskModel($pdo);
$jsonPersonView = new JsonTaskView();
$jsonPersonsView = new JsonTasksView();
$taskController = new TaskController($personModel, $jsonPersonView,$jsonPersonsView);


$router = new AltoRouter();
$router->setBasePath('/api/');

$router->map(
    'GET',
    'tasks/',
    function () use ($taskController) {
        $taskController->listTasks();
    }
);

$router->map(
    'PUT',
    'persons/[i:id]',
    function ($id) use ($taskController) {
        $entityBody = file_get_contents('php://input','r');
        $json = json_decode($entityBody);
        $name=null;
        if(isset($json->name)) {
            $name = $json->name;
        }
        $taskController->addPersonByIdAndName($id,$name);
    }
);


$match = $router->match();
if ($match && is_callable($match['target'])) {
    call_user_func_array($match['target'], $match['params']);
} else {
    http_response_code(400);
}
