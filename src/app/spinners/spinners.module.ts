import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnersComponent } from './spinners/spinners.component';
import { MaterialModule } from "../material/material.module";



@NgModule({
  declarations: [
    SpinnersComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class SpinnersModule { }
