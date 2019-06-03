<?php
use PHPUnit\Framework\TestCase;
use \model\PDOTaskModel;
use model\TaskModel;

class PDOTaskModelTest extends TestCase
{
    public function setUp(): void
    {
        $user = 'root';
        $password = '';
        $database = 'webadv';
        $server = 'localhost';
        $this->connection = new PDO("mysql:host=$server;dbname=$database", $user, $password);
        $this->connection->setAttribute(
            PDO::ATTR_ERRMODE,
            PDO::ERRMODE_EXCEPTION
        );
        $this->connection->exec('DROP TABLE IF EXISTS tasks');
        $this->connection->exec('CREATE TABLE tasks (
                        id INT, 
                        note VARCHAR(255),
                        category VARCHAR(255),
                        date TIMESTAMP,
                        dueDate TIMESTAMP,
                        PRIMARY KEY (id)
                   )');

        $tasks = $this->providerTasks();
        foreach ($tasks as $task) {
            $this->connection->exec("INSERT INTO tasks (id, note, category, date, dueDate) VALUES 
            (" . $task['id'] . ",'" . $task['note'] . "','" . $task['category'] . "','" . $task['date'] . "','" . $task['dueDate'] . "');");
        }
    }

    public function providerTasks()
    {
        return [
            ['id' => 1, 'note' => 'testnote1', 'category' => 'testcategory', 'date' => '2018-02-14 00:00:00', 'dueDate' => '2018-02-14 00:00:00'],
            ['id' => 2, 'note' => 'testnote2', 'category' => 'testcategory2', 'date' => '2018-02-14 00:00:00', 'dueDate' => '2018-02-14 00:00:00'],
            ['id' => 3, 'note' => 'testnote3', 'category' => 'testcategory3', 'date' => '2018-02-14 00:00:00', 'dueDate' => '2018-02-14 00:00:00']
        ];
    }

    public function testListTasks()
    {
        $taskModel = new PDOTaskModel($this->connection);
        $actualTasks = $taskModel->listTasks();
        $expectedTasks = $this->providerTasks();
        $this->assertEquals('array', gettype($actualTasks));
        $this->assertEquals(count($expectedTasks), count($actualTasks));
        $this->assertEquals($actualTasks, $expectedTasks);
        foreach ($actualTasks as $actualTask) {
            $this->assertContains($actualTask, $expectedTasks);
        }
    }

    public function testListTasksNoTasksInDatabaseEmptyArray()
    {
        $this->connection->exec('DROP TABLE tasks');

        $this->connection->exec('CREATE TABLE tasks (
                        id INT, 
                        note VARCHAR(255),
                        category VARCHAR(255),
                        date TIMESTAMP,
                        dueDate TIMESTAMP,
                        PRIMARY KEY (id)                   
                        )');

        $taskModel = new PDOTaskModel($this->connection);
        $actualTasks = $taskModel->listTasks();
        $this->assertEquals('array', gettype($actualTasks));
        $this->assertEquals(0, count($actualTasks));
    }

    /**
     * @expectedException \PDOException
     **/
    public function testListTasksNoTableTasksPDOException()
    {
        $this->connection->exec('DROP TABLE tasks');
        $personModel = new PDOTaskModel($this->connection);
        $personModel->listTasks();
    }

    public function testAddTask()
    {
        $taskModel = new PDOTaskModel($this->connection);
        $expectedTask = (object)['id' => 1, 'note' => 'testnote1', 'category' => 'testcategory', 'date' => '2018-02-14 00:00:00', 'dueDate' => '2018-02-14 00:00:00'];
        $actualTask = $taskModel->addTask($expectedTask);
        $this->assertEquals($expectedTask, $actualTask);
    }
}