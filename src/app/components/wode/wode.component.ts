import { Component } from '@angular/core';

@Component({
    selector: 'ssy-wode',
    templateUrl: './wode.component.html',
    styleUrls: ['./wode.component.less']
})

export class Wode {
    componentName: string;

    constructor() {
        this.componentName = '我的';
    }
}
