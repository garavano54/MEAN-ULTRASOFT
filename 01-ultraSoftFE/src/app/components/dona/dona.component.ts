import { Component, Input } from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  constructor() { }

  @Input() title = 'Sin título';
  @Input() doughnutChartLabels: Label[] = ['Label 1', 'Label 2', 'Label 3'];
  @Input() doughnutChartData: MultiDataSet = [ [350, 450, 100] ];

  // Para cambiar los colores se hace de la siguiente manera
  public colors:Color[] = [
    { backgroundColor: ['#6857E6','#009FEE','#F02059'] }
  ];

}
