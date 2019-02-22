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

@NgModule({
  declarations: [AppComponent, InicioComponent, Pagina404Component],
  imports: [
    appRouting,
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    ServicesModule,
    AgmaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
