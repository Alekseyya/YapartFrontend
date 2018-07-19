import {Directive, ElementRef} from '@angular/core'

@Directive({
    selector: '[redText]'
})

export class RedTextDirective {

    constructor(private elementRef: ElementRef) {
        this.elementRef.nativeElement.style.color = 'Red';
    }
}