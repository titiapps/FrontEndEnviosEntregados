import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { SharedModule } from "./components/shared/shared.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ServicesModule } from "./services/services.module";
import { appRouting } from "./app.routing";
import { CommonModule } from "@angular/common";
import { AgmaterialModule } from "./agmaterial.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgPaymentCardModule } from "ng-payment-card";
import { CreditCardDirectivesModule } from "angular-cc-library";

//COMPONENTENTES
import { LoginComponent } from "./components/login/login.component";
import { RegistrarComponent } from "./components/registrar/registrar.component";
import { Pagina404Component } from "./components/shared/pagina404/pagina404.component";
import { ConektaComponent } from "./components/pruebas/conekta/conekta.component";
import { PrincipalesComponent } from "./components/principales/principales.component";
import { StripeComponent } from './components/pruebas/stripe/stripe.component';
import { CardValComponent } from './components/pruebas/card-val/card-val.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    Pagina404Component,
    LoginComponent,
    RegistrarComponent,
    ConektaComponent,
    PrincipalesComponent,
    StripeComponent,
    CardValComponent


  ],
  imports: [
    appRouting,
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    ServicesModule,
    AgmaterialModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    NgPaymentCardModule,
    CreditCardDirectivesModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
