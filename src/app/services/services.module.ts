import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DireccionesService } from "./services.index";
import { HttpClientModule } from "@angular/common/http";
import { UsuarioService } from "./usuario/usuario.service";
import { LoginguardGuard } from './guards/loginguard.guard';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [DireccionesService,UsuarioService,LoginguardGuard]
})
export class ServicesModule {}
