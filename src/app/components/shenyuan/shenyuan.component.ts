import { Component } from '@angular/core';

@Component({
    selector: 'ssy-shenyuan',
    templateUrl: './shenyuan.component.html',
    styleUrls: ['./shenyuan.component.less', '../../style/common.less']
})

export class Shenyuan {
    componentName: string;

    constructor() {
        this.componentName = 'shenyuan';
    }
}
