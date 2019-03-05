import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { URL_MAPAS_HERE, URL_ENVIOS_BACK } from "../../../config/config";
import "rxjs/add/operator/map";
@Injectable()
export class DireccionesService {
  constructor(private _http: HttpClient) {
    console.log("SERVICIO CARGADO");
  }
  //ESTE SE CONECTA A LOS SERVICIOS DE HERE PARA PODER TRAER DATA
  busquedaLugares(busque: String) {
    let url = `${URL_MAPAS_HERE}&query=${busque}`;
    return this._http.get(url).map((resultados: any) => {
      return resultados;
    });
  }

  //ESTE SERVICIOS MANDA TANTO EL ORIGEN,DESTINO LO QUE CONLLEVA EL PAQUETE

  cotizacion(origen: any, destino: any, paquete: any) {
    let datosenvios = { origen, destino, paquete };

    console.log(datosenvios);
    let url = URL_ENVIOS_BACK + "paqueterias/cotizaEnvio";

    return this._http.post(url, datosenvios);
  }
}
