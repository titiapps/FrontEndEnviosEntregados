import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { URL_MAPAS_HERE } from "../../../config/config";
import "rxjs/add/operator/map";
@Injectable()
export class DireccionesService {
  constructor(private _http: HttpClient) {
    console.log("SERVICIO CARGADO");
  }

  busquedaLugares(busque: String) {
    let url = `${URL_MAPAS_HERE}&query=${busque}`;
    return this._http.get(url).map((resultados: any) => {
      return resultados;
    });
  }
}
