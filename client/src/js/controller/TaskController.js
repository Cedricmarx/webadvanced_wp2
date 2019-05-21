"use strict";

export default class TaskController {
    constructor(taskModel, taskView, tasksView, errorView) {
        this.taskModel = taskModel;
        this.taskView = taskView;
        this.tasksView = tasksView;
        this.errorView = errorView;
    }

    listTasks() {
        let promise = this.taskModel.listTasks();
        promise.then( (tasks) => {
            this.tasksView.show({tasks: tasks});
        }).catch(error => {
            this.errorView.show({error: error.message});
        });
    }

    addTask(task) {
        let promise = this.taskModel.addTask();
        promise.then( (task) => {
            this.taskView.show({task: task});
        }).catch(error => {
            this.errorView.show({error: error.message});
        });
    }
}
