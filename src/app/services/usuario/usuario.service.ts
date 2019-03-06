import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Usuario } from "src/app/models/usuario.model";
import { URL_ENVIOS_BACK } from "src/config/config";
import "rxjs/add/operator/map";

@Injectable()
export class UsuarioService {
  token: string;

  constructor(private _http: HttpClient) {
    this.cargarDatos();
  }

  crearUsuario(usuario: Usuario) {
    let url = URL_ENVIOS_BACK + "usuario/usuario";

    return this._http.post(url, usuario).map(resp => {
      return resp;
    });
  }

  //VERIFICACION DE USUARIOS
  login(usuario: Usuario): Observable<any> {
    let url = URL_ENVIOS_BACK + "autorizacion/login";

    let { email, password } = usuario;

    let credenciales = { email, password };

    return this._http
      .post(url, credenciales)
      .map(resp => {
        return resp;
      })
      .catch(err => {
        return Observable.throw(err); //ES PARA EL MANEJO DE LOS ERRORES
      });
  }

  cargarDatos() {
    if (localStorage.getItem("token")) {
      this.token = localStorage.getItem("token");
    } else {
      this.token = "";
      console.log("no hay token");
    }
  }
  estaLogueado() {
    return this.token.length > 4 ? true : false;
  }
}
