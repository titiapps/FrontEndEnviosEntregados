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

// COMPONENTENTES
import {
  LoginComponent,
  PizzaPartyComponent
} from "./components/login/login.component";
import { RegistrarComponent } from "./components/registrar/registrar.component";
import { Pagina404Component } from "./components/shared/pagina404/pagina404.component";
import { ConektaComponent } from "./components/pruebas/conekta/conekta.component";
import { PrincipalesComponent } from "./components/principales/principales.component";
import { CardValComponent } from './components/pruebas/card-val/card-val.component';
import { TrackComponent } from './components/pruebas/track/track.component';

import { PerfilComponent } from './components/perfil/perfil.component';
import { PasswordComponent } from './components/pruebas/password/password.component';
import { ConfirmComponent } from './components/pruebas/confirm/confirm.component';
import { RecoverComponent } from './components/pruebas/recover/recover.component';

import { PipesModule } from "./components/pipes/pipes.module";
import { registerLocaleData } from "@angular/common";
import localeMX from "@angular/common/locales/es-MX";



// the second parameter 'fr' is optional
registerLocaleData(localeMX,'es-MX');

@NgModule({
  declarations: [
    AppComponent,
    Pagina404Component,
    LoginComponent,
    RegistrarComponent,
    ConektaComponent,
    PrincipalesComponent,
    CardValComponent,
    PizzaPartyComponent,
    TrackComponent,
    PasswordComponent,
    ConfirmComponent,
    RecoverComponent,
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
    PipesModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [PizzaPartyComponent]
})
export class AppModule {}
