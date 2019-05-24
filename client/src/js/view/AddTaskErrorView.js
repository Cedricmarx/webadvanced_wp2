"use strict";
import View from './View';

export default class ErrorView extends View {
    show(data) {
        let error = data.error;
        let modal = document.getElementById('create-task-modal');
        while (this.modal.hasChildNodes()) {
            this.modal.removeChild(this.outputElement.firstChild);
        }
        let textNode = document.createTextNode(data);
        this.modal.appendChild(textNode);
        modal.show(error);
    }
}