"use strict";

export default class TaskController {
    constructor(taskModel, taskView, tasksView, errorView, addTaskView) {
        this.taskModel = taskModel;
        this.taskView = taskView;
        this.tasksView = tasksView;
        this.errorView = errorView;
        this.addTaskView = addTaskView;
    }

    listTasks() {
        let promise = this.taskModel.listTasks();
        promise.then((tasks) => {
            this.tasksView.show({ tasks: tasks });
        }).catch(error => {
            this.errorView.show({ error: error.message });
        });
    }

    addTask(task) {
        let promise = this.taskModel.addTask(task);
        promise.then((object) => {
            if (task.note == null) {
                this.errorView.show({ error: "A note is required" });
            }
            if (task.category == null) {
                this.errorView.show({ error: "A category is required" });
            }
            if (task.dueDate == null) {
                this.errorView.show({ error: "A due date is required" });
            }
        }).catch(error => {
            this.errorView.show({ error: error.message });
        });
    }
}
