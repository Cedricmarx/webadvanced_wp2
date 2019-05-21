"use strict";
import View from './View';

export default class TaskView extends View {

    show(data) {
        let person = data.person;
        let output = person.id + " " + person.name + "\n";
        super.show(output);
    }
}
