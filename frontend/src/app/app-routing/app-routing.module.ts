import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SignUpComponent} from "../sign-up/sign-up.component";
import {SignInComponent} from "../sign-in/sign-in.component";
import {ImpressumComponent} from "../impressum/impressum.component";
import {RouterModule, Routes} from "@angular/router";
import {NavigationComponent} from "../navigation/navigation.component";
import { AppModule} from "../app.module";


const routes: Routes = [
  {path: 'impressum', component: ImpressumComponent},
  {path: 'navigation-component', component: NavigationComponent},
  {path: 'sign-in-component', component: SignInComponent},
  {path: 'sign-up-component', component: SignUpComponent},

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ]
})
export class AppRoutingModule {
}

