import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: `
    <p>
      lifecycle works!
    </p>
  `,
  styles: []
})
export class LifecycleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('On Init');
  }

}
