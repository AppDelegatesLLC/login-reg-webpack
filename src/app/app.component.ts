import { Component } from '@angular/core';
import { NgbDateStruct, NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';

const now = new Date();

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'app works!';
    timewas = ''; //= moment().format('MMMM Do YYYY, h:mm:ss a');

    model: NgbDateStruct;
    date: {year: number, month: number};

    constructor(private modalService: NgbModal) {
        this.timewas = moment().format('MMMM Do YYYY, h:mm:ss a');
    }

    selectToday() {
        this.model = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
    }
}
