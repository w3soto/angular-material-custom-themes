import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypographyComponent } from "./typography/typography/typography.component";
import { BadgeComponent } from "./badge/badge.component";
import { FormsComponent } from "./forms/forms/forms.component";
import { SpinnersComponent } from "./spinners/spinners/spinners.component";
import { ButtonToggleComponent } from "./button-toggle/button-toggle.component";
import { ButtonComponent } from "./button/button.component";
import { ChipComponent } from "./chip/chip.component";
import { MenuComponent } from "./menu/menu.component";
import { ListComponent } from "./list/list.component";

const routes: Routes = [
  {path: '', redirectTo: 'badge', pathMatch: 'full'},
  // home
  {path: 'badge', component: BadgeComponent},
  {path: 'button', component: ButtonComponent},
  {path: 'button-toggle', component: ButtonToggleComponent},
  {path: 'chip', component: ChipComponent},
  {path: 'forms', component: FormsComponent},
  {path: 'list', component: ListComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'spinners', component: SpinnersComponent},
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
