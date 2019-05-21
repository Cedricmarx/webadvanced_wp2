<?php
namespace view;

class JsonTaskView implements View
{
    public function show(array $data)
    {
        header('Content-Type: application/json');
        http_response_code($data['statuscode']);
        $task = $data['task'];
        print(json_encode($task));
    }
}
