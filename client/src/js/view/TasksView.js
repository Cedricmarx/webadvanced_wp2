"use strict";
import View from './View';

export default class TasksView extends View {
    show(data) {
        let output = document.getElementById("output");
        for (let task of data.tasks) {
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
}
