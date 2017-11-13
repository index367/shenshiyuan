import { Component } from '@angular/core';

@Component({
    selector: 'ssy-yuyan',
    templateUrl: './yuyan.component.html',
    styleUrls: ['./yuyan.component.less']
})

export class Yuyan {
    componentName: string;

    constructor() {
        this.componentName = 'yuyan';
    }
}
