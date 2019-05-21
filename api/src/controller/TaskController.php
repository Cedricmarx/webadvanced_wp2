<?php

namespace controller;

use model\TaskModel;
use view\View;

class TaskController
{
    private $taskModel;
    private $jsonTaskView;
    private $jsonTasksView;


    public function __construct(TaskModel $taskModel, View $jsonTaskView, View $jsonTasksView)
    {
        $this->taskModel = $taskModel;
        $this->jsonTaskView = $jsonTaskView;
        $this->jsonTasksView = $jsonTasksView;
    }


    public function listTasks()
    {
        $statuscode = 200;
        $tasks = [];
        try {
            $tasks = $this->taskModel->listTasks();
        } catch (\PDOException $exception) {
            $statuscode = 500;
        }
        $this->jsonTasksView->show(['tasks' => $tasks, 'statuscode' => $statuscode]);
    }


    public function addTask($task)
    {
        $statuscode = 201;
        try {
            $task = $this->taskModel->addTask($task);
        } catch (\InvalidArgumentException $exception) {
            $statuscode = 400;
        } catch (\PDOException $exception) {
            $statuscode = 500;
        }
        $this->jsonTaskView->show(['task' => $task, 'statuscode' => $statuscode]);
    }
}
