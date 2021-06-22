import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatSliderModule} from "@angular/material/slider";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from "@angular/material/input";

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { PriceCalculatorComponent } from './price-calculator/price-calculator.component';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { NavigationComponent } from './navigation/navigation.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SignInComponent } from './sign-in/sign-in.component';
import { ImpressumComponent } from './impressum/impressum.component';
import {HttpClientModule} from "@angular/common/http";
import { SignUpComponent } from './sign-up/sign-up.component';
import {MAT_SNACK_BAR_DATA, MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule} from "@angular/material/snack-bar";
import {Inject} from "@angular/core";
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {RouterModule, ROUTES} from "@angular/router";
// import { SnackbarComponent } from './snackbar/snackbar.component';

@NgModule({
  declarations: [
    AppComponent,
    PriceCalculatorComponent,
    NavigationComponent,
    SignInComponent,
    ImpressumComponent,
    SignUpComponent,
    // SnackbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    MatRadioModule,
    MatFormFieldModule,
    MatCardModule,
    HttpClientModule,
    MatSnackBarModule,
    // AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([

      { path: '', component: SignInComponent},
      { path: 'impressum', component: ImpressumComponent},
    //  { path: 'navigation-component', component: NavigationComponent},
     { path: 'sign-up', component: SignUpComponent},
     { path: 'sign-in', component: SignInComponent},
      { path: 'price-calculator', component: PriceCalculatorComponent},
      ]),
  ],



  providers: [{provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
