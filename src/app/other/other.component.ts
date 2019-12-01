import { Component, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-other',
  template: `
    <input type="text" #i>
    <p>{{ input.value }}</p>
    <ng-content></ng-content>
  `,
  styles: []
})
export class OtherComponent  {
  @ViewChild('i', {static: true}) input: ElementRef;
  @ContentChild('paragraph', {static: true}) paragraph: ElementRef;

  constructor() {
    setTimeout( () => {
      this.input.nativeElement.value = 'Wert überschrieben';
      this.paragraph.nativeElement.innerText = 'Blubb';
    }, 3000);
  }

}
