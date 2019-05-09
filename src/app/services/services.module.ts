import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DireccionesService } from "./services.index";
import { HttpClientModule } from "@angular/common/http";
import { UsuarioService } from "./usuario/usuario.service";
import { LoginguardGuard } from "./guards/loginguard.guard";

import { PagosService } from "./pagos/pagos.service";
import { PagoEnvioService } from "./pagos/pago-envio.service";
import { MovimientosService } from './movimientos/movimientos.service';
import { TrackService } from './track/track.service';
import { ExcelService } from './reportes/excel.service';
import { VerificarRolGuard } from './guards/verificarrol.guard';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [
    DireccionesService,
    UsuarioService,
    LoginguardGuard,
    VerificarRolGuard,
    PagosService,
    PagoEnvioService,
    MovimientosService,
    TrackService,
    ExcelService
  ]
})
export class ServicesModule {}
