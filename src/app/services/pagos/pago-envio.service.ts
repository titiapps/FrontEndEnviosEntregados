import { Injectable } from "@angular/core";
import { URL_ENVIOS_BACK } from "src/config/config";
import { HttpClient } from "@angular/common/http";
import { DireccionEnvio } from "src/app/models/DireccionesEnvio.model";

@Injectable()
export class PagoEnvioService {
  constructor(private _http: HttpClient) {}
  pagoParaEnvio(origen: DireccionEnvio, destino: DireccionEnvio) {
    let url = URL_ENVIOS_BACK + "paqueterias/pagoEnvio";
    let body = { origen, destino };
    return this._http.post(url,body);
  }
}
