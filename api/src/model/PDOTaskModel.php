<?php

namespace model;

class PDOTaskModel implements TaskModel
{
    private $pdo = null;

    public function __construct(\PDO $pdo)
    {
        $this->pdo = $pdo;
    }

    public function listTasks()
    {
        $statement = $this->pdo->prepare('SELECT * FROM tasks');
        $statement->execute();
        $statement->bindColumn(1, $id, \PDO::PARAM_INT);
        $statement->bindColumn(2, $note, \PDO::PARAM_STR);
        $statement->bindColumn(3, $category, \PDO::PARAM_STR);
        $statement->bindColumn(4, $date, \PDO::PARAM_STR);
        $statement->bindColumn(5, $dueDate, \PDO::PARAM_STR);

        $tasks = [];
        while ($statement->fetch(\PDO::FETCH_BOUND)) {
            $tasks[] = ['id' => $id, 'note' => $note, 'category' => $category, 'date' => $date, 'dueDate' => $dueDate];
        }
        return $tasks;
    }

    public function addTask($task)
    {
        $statement = $this->pdo->prepare('INSERT into tasks(note,category,date,dueDate) VALUES (:note,:category,:date,:dueDate)');
        $statement->bindParam(':note', $task->note, \PDO::PARAM_STR);
        $statement->bindParam(':category', $task->category, \PDO::PARAM_STR);
        $statement->bindParam(':date', $task->date, \PDO::PARAM_STR);
        $statement->bindParam(':dueDate', $task->dueDate, \PDO::PARAM_STR);
        $statement->execute();
        
        return $task;
    }
}
