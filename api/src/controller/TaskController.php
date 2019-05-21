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


    public function addPersonByIdAndName($id, $name)
    {
        $statuscode = 201;
        $person = null;
        try {
            if ($this->taskModel->idExists($id)) {
                $statuscode = 200;
            }
            $person = $this->taskModel->addPersonByIdAndName($id, $name);
        } catch (\InvalidArgumentException $exception) {
            $statuscode = 400;
        } catch (\PDOException $exception) {
            $statuscode = 500;
        }
        $this->jsonTaskView->show(['person' => $person, 'statuscode' => $statuscode]);
    }
}
