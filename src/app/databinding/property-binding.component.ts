import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `
    <p>{{ name }}</p>
  `
})
export class PropertyBindingComponent {

  // tslint:disable-next-line:no-input-rename
  @Input('nameProp') name: string;

}
