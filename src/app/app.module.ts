import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from "./material/material.module";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from "./forms/forms.module";
import { SpinnersModule } from "./spinners/spinners.module";
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { ButtonComponent } from "./button/button.component";
import { BadgeComponent } from "./badge/badge.component";
import { ChipComponent } from './chip/chip.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MenuComponent } from './menu/menu.component';
import { ListComponent } from './list/list.component';
import { TypographyComponent } from "./typography/typography.component";



@NgModule({
  declarations: [
    AppComponent,
    BadgeComponent,
    ButtonComponent,
    ButtonToggleComponent,
    ChipComponent,
    MenuComponent,
    ListComponent,
    TypographyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,

    AppRoutingModule,

    FormsModule,
    SpinnersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
