import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[exeUnless]'
})
export class UnlessDirective {
    @Input('exeUnless')
    set condition(newCondition: boolean) {
        if (!newCondition) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
            this.viewContainer.clear();
        }
    }

    constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

}
