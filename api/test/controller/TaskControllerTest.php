<?php
use PHPUnit\Framework\TestCase;
use \controller\TaskController;

class TaskControllerTest extends TestCase
{
    public function setUp(): void
    {
        $this->taskModel = $this->getMockBuilder('\model\TaskModel')
            ->disableOriginalConstructor()
            ->getMock();
        $this->jsonTaskView = $this->getMockBuilder('\view\JsonTaskView')
            ->disableOriginalConstructor()
            ->getMock();
        $this->jsonTasksView = $this->getMockBuilder('\view\JsonTasksView')
            ->disableOriginalConstructor()
            ->getMock();
    }


    public function providerTasks()
    {
        return [
            ['id' => 1, 'note' => 'testnote1', 'category' => 'testcategory', 'date' => '2018-02-14T00:00:00', 'dueDate' => '2018-02-14T00:00:00'],
            ['id' => 2, 'note' => 'testnote2', 'category' => 'testcategory', 'date' => '2018-02-14T00:00:00', 'dueDate' => '2018-02-14T00:00:00'],
            ['id' => 3, 'note' => 'testnote3', 'category' => 'testcategory3', 'date' => '2018-02-14T00:00:00', 'dueDate' => '2018-02-14T00:00:00']
        ];
    }

///
//* @dataProvider providerTasks
///
    public function testAddTaskValidTaskShowTaskAndStatus201()
    {
        $tempTask = ['id' => 1, 'note' => 'testnote', 'category' => 'testcategory', 'date' => '2018-02-14T00:00:00', 'dueDate' => '2018-02-14T00:00:00'];

        $this->taskModel->expects($this->atLeastOnce())
            ->method('addTask')
            ->with($this->equalTo($tempTask))
            ->will($this->returnValue($tempTask));

        $data = ['task' => $tempTask, 'statuscode' => 201];

        $this->jsonTaskView->expects($this->atLeastOnce())
            ->method('show')
            ->with($this->equalTo($data));
        $personController = new TaskController($this->taskModel, $this->jsonTaskView, $this->jsonTasksView);
        $personController->addTask($tempTask);
    }
}