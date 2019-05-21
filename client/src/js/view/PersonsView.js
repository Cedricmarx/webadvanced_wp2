"use strict";
import View from './View';

export default class PersonsView extends View {
    show(data) {
        let output = "";
        for (let person of data.persons) {
            output = output + `${person.id} ${person.name}\n`;
        }
        super.show(output);
    }
}
