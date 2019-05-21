"use strict";

import TaskController from './controller/TaskController';
import TaskModel from './model/TaskModel';
import TaskView from './view/TaskView';
import TasksView from './view/TasksView';
import ErrorView from './view/ErrorView';

let url = 'http://192.168.33.22/api/tasks/';

let taskView;
let tasksView;
let errorView;
let taskModel;
let taskController;

window.addEventListener("load", handleWindowLoad);

function handleWindowLoad() {
    taskView = new TaskView();
    tasksView = new TasksView();
    errorView = new ErrorView();
    taskModel = new TaskModel(url);
    taskController = new TaskController(taskModel, taskView, tasksView, errorView);

    let btnGETPersons = document.getElementById("btngetpersons");
    btnGETPersons.addEventListener("click", handleClickGetAllPersons);
    let btnPUTPerson = document.getElementById("btnputidname");
    btnPUTPerson.addEventListener("click", handleClickPUTPerson);
}

function handleClickGetAllPersons() {
    taskController.listTasks();
}

function handleClickPUTPerson() {
    let id = document.getElementById("txtid").value;
    let name = document.getElementById("txtname").value;
    taskController.addTask(task);
}
