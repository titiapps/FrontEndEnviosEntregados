import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from '../../../environments/environment.prod';
// import { URL_ENVIOS_BACK } from "src/config/config";

@Injectable()
export class MovimientosService {
  constructor(private _http: HttpClient) {}

  regresarInformacionMovimiento(id: String) {
    let url = environment.backURL + "movimientos/buscarMovimiento/" + id;
    return this._http.get(url);
  }

  regresarMovimientosUsuario(id: String) {
    let url = environment.backURL + "movimientos/movimientousuario/" + id;
    return this._http.get(url);
  }
  movimientosReporteFechas(fecha_inicio, fecha_fin) {
    let url = environment.backURL + "movimientos/movimientosFecha";
    let body = { fecha_inicio, fecha_fin };
    return this._http.post(url, body);
  }
}
