import { Component, TemplateRef, ViewContainerRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
    selector: 'ssy-banbi',
    templateUrl: './banbi.component.html',
    styleUrls: ['./banbi.component.less']
})

export class Banbi implements AfterViewInit {
    componentName: string;
    condition: boolean;

    @ViewChild('tpl')
    tplRef: TemplateRef<any>;

    constructor(private vcRef: ViewContainerRef) {
        this.componentName = 'banbi';
        this.condition = false;
    }

    ngAfterViewInit() {
        this.vcRef.createEmbeddedView(this.tplRef);
    }
}
