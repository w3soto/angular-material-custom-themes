import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from "./material/material.module";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { ButtonComponent } from "./button/button.component";
import { BadgeComponent } from "./badge/badge.component";
import { ChipComponent } from './chip/chip.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MenuComponent } from './menu/menu.component';
import { ListComponent } from './list/list.component';
import { TypographyComponent } from "./typography/typography.component";
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { SliderComponent } from './slider/slider.component';



@NgModule({
  declarations: [
    AppComponent,
    BadgeComponent,
    ButtonComponent,
    ButtonToggleComponent,
    ChipComponent,
    MenuComponent,
    ListComponent,
    TypographyComponent,
    ProgressSpinnerComponent,
    ProgressBarComponent,
    FormFieldComponent,
    CheckboxComponent,
    RadioButtonComponent,
    SlideToggleComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,

    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
