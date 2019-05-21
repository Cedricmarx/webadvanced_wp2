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
        $statement = $this->pdo->prepare('SELECT * FROM task');
        $statement->execute();
        $statement->bindColumn(1, $note, \PDO::PARAM_STR);
        $statement->bindColumn(2, $complete, \PDO::PARAM_BOOL);
        $statement->bindColumn(3, $category, \PDO::PARAM_STR);
        $statement->bindColumn(4, $date, \PDO::PARAM_STR);
        $statement->bindColumn(5, $dueDate, \PDO::PARAM_STR);

        $tasks = [];
        while ($statement->fetch(\PDO::FETCH_BOUND)) {
            $tasks[] = ['note' => $note, 'complete' => $complete, 'category' => $category, 'date' => $date, 'dueDate' => $dueDate];
        }
        return $tasks;
    }

    public function addTask($task)
    {
        $statement = $this->pdo->prepare('INSERT into tasks(note,complete,category,date,dueDate) VALUES (:note,:complete,:category,:date,:dueDate) ON DUPLICATE KEY UPDATE note=:note, complete=:complete, category=:category, date=:date, dueDate=:dueDate');
        $statement->bindParam(':note', $task->note, \PDO::PARAM_STR);
        $statement->bindParam(':complete', $task->complete, \PDO::PARAM_BOOL);
        $statement->bindParam(':category', $task->category, \PDO::PARAM_STR);
        $statement->bindParam(':date', $task->date, \PDO::PARAM_STR);
        $statement->bindParam(':dueDate', $task->dueDate, \PDO::PARAM_STR);
        $statement->execute();

        return $task;
    }

    public function searchByCategory($category)
    {
        $this->searchByCategory($category);
        $statement = $this->pdo->prepare('SELECT * from tasks WHERE category=:category');
        $statement->bindParam(':category', $category, \PDO::PARAM_STR);
        $statement->execute();
        if ($statement->fetch() === FALSE) {
            return FALSE;
        }
        return TRUE;
    }
}
