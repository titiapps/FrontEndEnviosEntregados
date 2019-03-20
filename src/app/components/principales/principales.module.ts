import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InicialComponent } from "../principales/inicial/inicial.component";
import { principalesRoutes } from "./principales.routing";
import {
  BusquedadireccionComponent,
  DialogOrigen,
  DialogDestino
} from "./inicial/busquedadireccion/busquedadireccion.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AgmaterialModule } from "src/app/agmaterial.module";
import { TarifasComponent } from "./tarifas/tarifas.component";
import { PagoComponent } from "./pago/pago.component";
import { PizzaPartyComponent } from "../login/login.component";

@NgModule({
  declarations: [
    InicialComponent,
    BusquedadireccionComponent,
    TarifasComponent,
    DialogOrigen,
    DialogDestino,
    PagoComponent
  ],
  exports: [InicialComponent],
  imports: [
    CommonModule,
    principalesRoutes,
    FormsModule,
    ReactiveFormsModule,
    AgmaterialModule
  ],
  entryComponents: [DialogOrigen, DialogDestino]
})
export class PrincipalesModule {}
