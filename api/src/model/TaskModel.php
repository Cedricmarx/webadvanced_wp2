<?php

namespace model;

interface TaskModel
{
    public function searchByCategory($category);

    public function listTasks();

    public function addTask($task);
}
