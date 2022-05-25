import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypographyComponent } from "./typography/typography.component";
import { BadgeComponent } from "./badge/badge.component";
import { ButtonToggleComponent } from "./button-toggle/button-toggle.component";
import { ButtonComponent } from "./button/button.component";
import { ChipComponent } from "./chip/chip.component";
import { MenuComponent } from "./menu/menu.component";
import { ListComponent } from "./list/list.component";
import { ProgressBarComponent } from "./progress-bar/progress-bar.component";
import { ProgressSpinnerComponent } from "./progress-spinner/progress-spinner.component";
import { FormFieldComponent } from "./form-field/form-field.component";
import { RadioButtonComponent } from "./radio-button/radio-button.component";
import { SlideToggleComponent } from "./slide-toggle/slide-toggle.component";
import { SliderComponent } from "./slider/slider.component";
import { CheckboxComponent } from "./checkbox/checkbox.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { TooltipComponent } from "./tooltip/tooltip.component";
import { TabsComponent } from "./tabs/tabs.component";
import { TableComponent } from "./table/table.component";
import { SnackbarComponent } from "./snackbar/snackbar.component";
import { CardComponent } from "./card/card.component";
import { IconComponent } from "./icon/icon.component";
import { DialogComponent } from "./dialog/dialog.component";

const routes: Routes = [
  {path: '', redirectTo: 'badge', pathMatch: 'full'},
  // home
  {path: 'badge', component: BadgeComponent},
  {path: 'button', component: ButtonComponent},
  {path: 'button-toggle', component: ButtonToggleComponent},
  {path: 'card', component: CardComponent},
  {path: 'checkbox', component: CheckboxComponent},
  {path: 'chip', component: ChipComponent},
  {path: 'dialog', component: DialogComponent},
  {path: 'form-field', component: FormFieldComponent},
  {path: 'icon', component: IconComponent},
  {path: 'list', component: ListComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'progress-bar', component: ProgressBarComponent},
  {path: 'progress-spinner', component: ProgressSpinnerComponent},
  {path: 'radio-button', component: RadioButtonComponent},
  {path: 'slide-toggle', component: SlideToggleComponent},
  {path: 'slider', component: SliderComponent},
  {path: 'snackbar', component: SnackbarComponent},
  {path: 'table', component: TableComponent},
  {path: 'tabs', component: TabsComponent},
  {path: 'toolbar', component: ToolbarComponent},
  {path: 'tooltip', component: TooltipComponent},
  {path: 'typography', component: TypographyComponent},
  // home
  {path: '**', redirectTo: 'badge'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
