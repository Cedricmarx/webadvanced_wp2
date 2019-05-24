"use strict";

export default class TaskModel {
    constructor(url) {
        this.url = url;
    }

    listTasks() {
        return fetch(this.url, { method: 'GET' })
            .then((response) => {
                if (response.status != 200) {
                    throw new Error('rejected:' + response.status);
                }
                return response.json();
            });
    }

    addTask(task) {
        return fetch(this.url + 'create/', { method: 'POST', body: JSON.stringify(task) })
            .then((response) => {
                if (response.status != 201) {
                    throw new Error('rejected:' + response.status);
                }
                return response.json();
            });
    }
}

