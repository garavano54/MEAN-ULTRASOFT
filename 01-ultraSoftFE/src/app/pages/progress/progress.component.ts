import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: [
  ]
})
export class ProgressComponent {

  progreso1 = 40;
  progreso2 = 60;

  get getProgreso1() {
    return `${this.progreso1}%`
  }

  get getProgreso2() {
    return `${this.progreso2}%`
  }

}
