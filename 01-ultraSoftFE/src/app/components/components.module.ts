import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonaComponent } from './dona/dona.component';
import { IncrementadorComponent } from './incrementador/incrementador.component';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DonaComponent,
    IncrementadorComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    IncrementadorComponent,
    DonaComponent
  ]
})
export class ComponentsModule { }



