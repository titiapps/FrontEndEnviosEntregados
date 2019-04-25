<<<<<<< HEAD
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { URL_MAPAS_HERE, URL_ENVIOS_BACK } from "../../../config/config";
import "rxjs/add/operator/map";
import { DireccionEnvio } from "src/app/models/DireccionesEnvio.model";
import { UsuarioService } from "../usuario/usuario.service";
=======
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_MAPAS_HERE, URL_ENVIOS_BACK } from '../../../config/config';
import 'rxjs/add/operator/map';
import { DireccionEnvio } from 'src/app/models/DireccionesEnvio.model';
>>>>>>> d74f61645f515fcb7b318a883b331c9405f7f45e
@Injectable()
export class DireccionesService {
  origen: DireccionEnvio;
  destino: DireccionEnvio;
  paquetes: Array<any>;
  seleccionTarifaPaquete: any; // este es cuando ya seleccionaaste que quieres

<<<<<<< HEAD
  constructor(
    private _http: HttpClient,
    private _usuarioService: UsuarioService
  ) {
    this.paquetes = []; //se agrega el paquete al array respectivo
=======
  constructor(private _http: HttpClient) {
    this.paquetes = []; // se agrega el paquete al array respectivo
>>>>>>> d74f61645f515fcb7b318a883b331c9405f7f45e
  }
  // ESTE SE CONECTA A LOS SERVICIOS DE HERE PARA PODER TRAER DATA
  busquedaLugares(busque: string) {
    const url = `${URL_MAPAS_HERE}&query=${busque}`;
    return this._http.get(url).map((resultados: any) => {
      return resultados;
    });
  }

  datosParaCotizacion(origen, destino, arraypaquete) {
    this.origen = origen;
    this.destino = destino;
    this.paquetes.push(arraypaquete);
  }

  // ESTE SERVICIOS MANDA TANTO EL ORIGEN,DESTINO LO QUE CONLLEVA EL PAQUETE

  cotizacion(origen: any, destino: any, paquete: any) {
<<<<<<< HEAD
    let datosenvios = { origen, destino, paquete };
    let headers = new HttpHeaders().set(
      "Authorization",
      this._usuarioService.token
    );
   
    let url = URL_ENVIOS_BACK + "paqueterias/cotizaEnvio";
=======
    const datosenvios = { origen, destino, paquete };

    console.log(datosenvios);
    const url = URL_ENVIOS_BACK + 'paqueterias/cotizaEnvio';
>>>>>>> d74f61645f515fcb7b318a883b331c9405f7f45e

    const httpOptions = {
      headers
    };
    console.log(httpOptions);

    return this._http.post(url, datosenvios, httpOptions);
  }
}
