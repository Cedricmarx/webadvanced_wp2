"use strict";

import TaskController from './controller/TaskController';
import TaskModel from './model/TaskModel';
import TaskView from './view/TaskView';
import TasksView from './view/TasksView';
import ErrorView from './view/ErrorView';
import AddTaskView from './view/AddTaskView';

let url = 'http://localhost/api/tasks/';

let taskView;
let tasksView;
let errorView;
let taskModel;
let addTaskView;
let taskController;

window.addEventListener('load', handleWindowLoad);

function handleWindowLoad() {
    taskView = new TaskView();
    tasksView = new TasksView();
    errorView = new ErrorView();
    addTaskView = new AddTaskView();
    taskModel = new TaskModel(url);
    taskController = new TaskController(taskModel, taskView, tasksView, errorView, addTaskView);

    handleAddTaskButtonClick();
    handleClickGetAllTasks();
    clearModal();
}

function handleClickGetAllTasks() {
    taskController.listTasks();
}

function handleAddTask(event) {
    event.preventDefault();

    let alertDanger = document.getElementById('error-alert');
    while (alertDanger.firstChild) {
        alertDanger.removeChild(alertDanger.firstChild);
    }

    var ul = document.createElement('ul');
    alertDanger.append(ul);

    const formData = new FormData(document.getElementById('form'));

    let note = formData.get('note');
    inputValidation(note, 'note', ul);

    let category = formData.get('category');
    inputValidation(category, 'category', ul);

    let dueDate = formData.get('due');
    inputValidation(dueDate, 'due date', ul);

    let d = new Date();
    let dformat = [d.getFullYear(), d.getMonth(), d.getDate()].join('-') + 'T' +
        [d.getHours(), d.getMinutes(), d.getSeconds()].join(':');

    if (note == "" || category == "" || dueDate == "") {
        alertDanger.style = '';
    } else {
        let task = { 'note': note, 'category': category, 'date': dformat, 'dueDate': dueDate };
        taskController.addTask(task);
        $("#create-task-modal").modal("hide");
        window.location.reload();
    }
}

function handleAddTaskButtonClick(event) {
    let addTaskButton = document.getElementById('addTaskButton');
    addTaskButton.addEventListener("click", handleAddTask);
}

function inputValidation(input, error, ul) {
    if (input == '') {
        var li = document.createElement('li');
        li.innerText = error + ' is required!';
        li.classList.add('alert-danger');
        ul.appendChild(li);
    }
}

function clearModal() {
    $('#create-task-modal').on('hidden.bs.modal', function () {
        $(this).find("input,textarea,select").val('').end();
        $('.alert-danger').hide();
    });
}