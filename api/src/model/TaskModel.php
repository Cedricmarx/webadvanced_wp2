<?php

namespace model;

interface TaskModel
{
    public function listTasks();
    
    public function addTask($task);
}
