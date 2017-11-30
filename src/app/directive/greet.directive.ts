import { Directive, HostBinding, HostListener, Input, Attribute } from '@angular/core';

@Directive({
    selector: '[greet]'
})
export class GreetDirective {
    @Input() greet: string;

    @HostBinding() get innerText() {
        return this.greet;
    }

    @HostListener('click', ['$event'])
        onClick(event) {
            this.greet = 'Clicked!';
        }

    constructor(@Attribute('author') public author: string) {
        console.log(author);
    }
}
