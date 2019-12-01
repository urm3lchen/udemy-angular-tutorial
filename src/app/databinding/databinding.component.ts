import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styles: [`
    .red-border {
      border: 1px solid red;
    }
  `]
})
export class DatabindingComponent {
  aString = 'Ich bin ein String';
  aNumber = 101;
  attachClass = false;
  aColor = 'white';

  constructor() {
    setTimeout(() => {
      this.aNumber += 200;
      this.attachClass = true;
      this.aColor = 'blue';
    }, 3000);
  }

  onClick(event: Event) {
    alert('clicked');
    console.log(event);
  }

}
