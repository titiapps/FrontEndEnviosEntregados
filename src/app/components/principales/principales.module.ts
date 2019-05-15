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
import { MovimientosComponent } from "./movimientos/movimientos.component";
import { MovimientosPerfilComponent } from "../perfil/movimientos-perfil.component";
import { TarjetaPerfilComponent } from "../perfil/tarjeta-perfil.component";
import { PerfilComponent } from "../perfil/perfil.component";
import { ReporteComponent } from "../admin/reporte/reporte.component";
import { TablareporteComponent } from "../admin/reporte/tablareporte.component";
import { ItemsComponent } from './pago/items.component';
import { DatosComponent, DataPizzaPartyComponent } from '../datos/datos.component';
import { CardModule } from 'ngx-card';


@NgModule({
  declarations: [
    InicialComponent,
    BusquedadireccionComponent,
    TarifasComponent,
    DialogOrigen,
    DialogDestino,
    PagoComponent,
    CompraEnvioComponent,
    MovimientosComponent,
    MovimientosPerfilComponent,
    TarjetaPerfilComponent,
    PerfilComponent,
    ReporteComponent,
    TablareporteComponent,
    ItemsComponent,
    DatosComponent,
    DataPizzaPartyComponent,

  ],
  exports: [InicialComponent],
  imports: [
    CommonModule,
    principalesRoutes,
    FormsModule,
    ReactiveFormsModule,
    AgmaterialModule,
    PipesModule,
    CreditCardDirectivesModule,
    CardModule
  ],
  entryComponents: [DialogOrigen, DialogDestino, DataPizzaPartyComponent]
})
export class PrincipalesModule {}
