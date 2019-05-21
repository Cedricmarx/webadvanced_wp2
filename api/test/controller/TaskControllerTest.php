<?php
use PHPUnit\Framework\TestCase;
use \controller\TaskController;

class TaskControllerTest extends TestCase
{

    public function setUp() : void
    {
        $this->personModel = $this->getMockBuilder('\model\TaskModel')
            ->disableOriginalConstructor()
			->getMock();
        $this->jsonPersonView = $this->getMockBuilder('\view\JsonTaskView')
            ->disableOriginalConstructor()
            ->getMock();
        $this->jsonPersonsView = $this->getMockBuilder('\view\JsonTasksView')
            ->disableOriginalConstructor()
            ->getMock();
    }


    public function providerPersons()
    {
        return [['id'=>'1','name'=>'testname1'], ['id'=>'2','name'=>'testname2'],['id'=>'3','name'=>'testname3']];
    }


    /**
     * @dataProvider providerPersons
     **/
    public function testaddPersonById_validPerson_showPersonAndStatus201($id, $name){
		$person=['id'=>$id,'name'=>$name];
        $this->personModel->expects($this->atLeastOnce())
            ->method('addTask')
            ->with( $this->equalTo($id), $this->equalTo($name))
            ->will($this->returnValue($person));

		$data=['person' => $person, 'statuscode' => 201];

        $this->jsonPersonView->expects($this->atLeastOnce())
            ->method('show')
            ->with($this->equalTo($data));
        $personController = new TaskController($this->personModel, $this->jsonPersonView, $this->jsonPersonsView);
        $personController->addPersonByIdAndName($id,$name);
    }


}
