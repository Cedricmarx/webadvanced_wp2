<?php

namespace model;

interface TaskModel
{
    public function idExists($id);

    public function listTasks();

    public function addPersonByIdAndName($id, $name);
}
