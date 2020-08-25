import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {

  label1: string[]  = ['Notebook', 'Celulares', 'Tablets'];
  data1: number[] = [30, 60, 90];

  constructor() { }

  ngOnInit(): void {
  }

}
