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
    tarifa_Paquete_Seleccionada: any
  ) {
    var headers = new HttpHeaders().set(
      "Authorization",
      this._usuarioService.token
    );

    const httpOptions = {
      headers
    };
    let url = URL_ENVIOS_BACK + "paqueterias/pagoEnvio";
    let body = {
      origen,
      destino,
      pagoDataInfo,
      tarifa_Paquete_Seleccionada
    };
    return this._http.post(url, body, httpOptions);
  }

  comprarEtiqueta(
    carrier_account_id: String,
    shipment_id: String,
    rate_id: String
  ) {
    let url = URL_ENVIOS_BACK + "paqueterias/comprarEtiqueta";
    let body = { carrier_account_id, shipment_id, rate_id };
    return this._http.post(url, body);
  }
}
