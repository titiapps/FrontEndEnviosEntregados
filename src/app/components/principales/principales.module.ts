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
import { PipesModule } from "../pipes/pipes.module";
import { CompraEnvioComponent } from "./compra-envio/compra-envio.component";
import { CreditCardDirectivesModule } from "angular-cc-library";
import { MovimientosComponent } from './movimientos/movimientos.component';


@NgModule({
  declarations: [
    InicialComponent,
    BusquedadireccionComponent,
    TarifasComponent,
    DialogOrigen,
    DialogDestino,
    PagoComponent,
    CompraEnvioComponent,
    MovimientosComponent
  ],
  exports: [InicialComponent],
  imports: [
    CommonModule,
    principalesRoutes,
    FormsModule,
    ReactiveFormsModule,
    AgmaterialModule,
    PipesModule,
    CreditCardDirectivesModule
  ],
  entryComponents: [DialogOrigen, DialogDestino]
})
export class PrincipalesModule {}