import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appUpperCase]'
})
export class UpperCaseDirective {

  constructor(private el: ElementRef) {}

  @HostListener('ngModelChange', ['$event'])
  onModelChange(event: string) {
    this.el.nativeElement.value = event.toUpperCase();
  }
}
