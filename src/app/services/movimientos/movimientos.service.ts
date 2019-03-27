import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { URL_ENVIOS_BACK } from "src/config/config";

@Injectable()
export class MovimientosService {
  constructor(private _http: HttpClient) {}

  regresarInformacionMovimiento(id: String) {
    let url = URL_ENVIOS_BACK + "movimientos/buscarMovimiento/" + id;
    return this._http.get(url);
  }
}
