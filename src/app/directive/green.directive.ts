import { Directive, HostBinding } from '@angular/core';

@Directive({
    selector: '[green]'
})
export class GreenDirective {
    @HostBinding() innerText = 'Angular Directive';
}

// https://segmentfault.com/a/1190000009674089
