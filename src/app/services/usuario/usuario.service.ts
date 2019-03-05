import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Usuario } from "src/app/models/usuario.model";
import { URL_ENVIOS_BACK } from "src/config/config";
import "rxjs/add/operator/map";

@Injectable()
export class UsuarioService {
  constructor(private _http: HttpClient) {
    console.log("arriba");
  }

  crearUsuario(usuario: Usuario) {
    let url = URL_ENVIOS_BACK + "usuario/usuario";

    return this._http.post(url, usuario).map(resp => {
      return resp;
    });
  }
}
