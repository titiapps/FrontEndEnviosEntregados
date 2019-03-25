import { Injectable } from "@angular/core";
import { URL_ENVIOS_BACK } from "src/config/config";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { DireccionEnvio } from "src/app/models/DireccionesEnvio.model";
import { UsuarioService } from "../usuario/usuario.service";

@Injectable()
export class PagoEnvioService {
  constructor(
    private _http: HttpClient,
    private _usuarioService: UsuarioService
  ) {}
  pagoParaEnvio(
    origen: DireccionEnvio,
    destino: DireccionEnvio,
    pagoDataInfo: any,
    paqueteSeleccionado: any
  ) {
    var headers = new HttpHeaders().set(
      "Authorization",
      this._usuarioService.token
    );

    const httpOptions = {
      headers
    };
    let url = URL_ENVIOS_BACK + "paqueterias/pagoEnvio";
    let body = { origen, destino, pagoDataInfo, paqueteSeleccionado };
    return this._http.post(url, body, httpOptions);
  }
}
