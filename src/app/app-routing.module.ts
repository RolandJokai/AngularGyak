import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooldalComponent } from './fooldal/fooldal.component';
import { RolunkComponent } from './rolunk/rolunk.component';
import { ButorokComponent } from './butorok/butorok.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path: "fooldal", component:FooldalComponent},
  {path: "rolunk", component:RolunkComponent},
  {path: "butorok", component:ButorokComponent},

  {path: "", redirectTo: "/fooldal" , pathMatch: "full"},

  {path: "**", component:ErrorComponent}
  ];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
