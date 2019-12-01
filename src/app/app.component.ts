import { OtherComponent } from './other/other.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Databinding</h1>
  <hr>
  <app-databinding></app-databinding>
  <app-other>
    <p #paragraph>Irgendein Text</p>
  </app-other>
  <app-lifecycle></app-lifecycle>
  `
})
export class AppComponent {
}
