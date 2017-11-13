import { Component } from '@angular/core';

@Component({
    selector: 'ssy-banbi',
    templateUrl: './banbi.component.html',
    styleUrls: ['./banbi.component.less']
})

export class Banbi {
    componentName: string;

    constructor() {
        this.componentName = 'banbi';
    }
}
