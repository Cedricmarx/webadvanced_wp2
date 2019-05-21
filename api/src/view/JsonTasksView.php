<?php
namespace view;

class JsonTasksView implements View
{
    public function show(array $data)
    {
        header('Content-Type: application/json');
        http_response_code($data['statuscode']);
        $tasks = $data['tasks'];
        print(json_encode($tasks));
    }
}
