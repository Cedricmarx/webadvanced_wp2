"use strict";
import View from './View';

export default class TaskView extends View {

    show(data) {
        let task = data.task;
        let output = document.getElementById("output");
        var tr = document.createElement('tr');

        var tdId = document.createElement('td');
        var tdNote = document.createElement('td');
        var tdCategory = document.createElement('td');
        var tdDate = document.createElement('td');
        var tdDueDate = document.createElement('td');

        var id = document.createTextNode(task.id);
        var note = document.createTextNode(task.note);
        var category = document.createTextNode(task.category);
        var date = document.createTextNode(task.date);
        var dueDate = document.createTextNode(task.dueDate);

        tdId.appendChild(id);
        tdNote.appendChild(note);
        tdCategory.appendChild(category);
        tdDate.appendChild(date);
        tdDueDate.appendChild(dueDate);

        tr.appendChild(tdId);
        tr.appendChild(tdNote);
        tr.appendChild(tdCategory);
        tr.appendChild(tdDate);
        tr.appendChild(tdDueDate);

        output.appendChild(tr);
    }
}
