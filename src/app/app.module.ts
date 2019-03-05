import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { InicioComponent } from "./components/inicio/inicio.component";
import { Pagina404Component } from "./components/shared/pagina404/pagina404.component";
import { appRouting } from "./app.routing";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ServicesModule } from "./services/services.module";
import { AgmaterialModule } from "./agmaterial.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./components/login/login.component";
import { SharedModule } from "./components/shared/shared.module";
import { RegistrarComponent } from './components/registrar/registrar.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    Pagina404Component,
    LoginComponent,
    RegistrarComponent
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
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
