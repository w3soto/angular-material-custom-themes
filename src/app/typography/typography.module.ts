import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypographyComponent } from './typography/typography.component';
import { MaterialModule } from "../material/material.module";


@NgModule({
  declarations: [
    TypographyComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class TypographyModule { }
