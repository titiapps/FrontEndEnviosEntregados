import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Usuario } from "src/app/models/usuario.model";
import { URL_ENVIOS_BACK } from "src/config/config";
import "rxjs/add/operator/map";
import Swal from "sweetalert2";

@Injectable()
export class UsuarioService {
  token: string;
  usuario: Usuario;

  constructor(private _http: HttpClient) {
    this.cargarDatos();
  }

  crearUsuario(usuario: Usuario): Observable<any> {
    let url = URL_ENVIOS_BACK + "usuario/usuario";

    return this._http.post(url, usuario).map(resp => {
      return resp;
    })
    .catch(err => {
      if(err.error.errores.errors.email.kind != undefined){
        Swal.fire("Error", "Ooopsie dopsie!!! la cuenta ya existe, ma' fren...", "error");
        return Observable.throw(err); //ES PARA EL MANEJO DE LOS ERRORES

      }else{
        //console.log("el error es ",err.error.errores.errors);
        Swal.fire("Error", "Ooopsie dopsie!!! ocurrio un error, ma' fren...", "error");
        return Observable.throw(err); //ES PARA EL MANEJO DE LOS ERRORES


      }
    
    });
  }

  //VERIFICACION DE USUARIOS
  login(usuario: Usuario): Observable<any> {
    let url = URL_ENVIOS_BACK + "autorizacion/login";

    let { email, password } = usuario;

    let credenciales = { email, password };

    return this._http
      .post(url, credenciales)
      .map((resp: any) => {
        this.guardarStorage(resp._id, resp.token, resp.usuario);
        return resp;
      })
      .catch(err => {
        Swal.fire("Error", "Tu usuario o contraseña no son correctos", "error");
        return Observable.throw(err); //ES PARA EL MANEJO DE LOS ERRORES
      });
  }

  

  guardarStorage(id: string, token: string, usuario: Usuario) {
    localStorage.setItem("id", id);
    localStorage.setItem("token", token);
    localStorage.setItem("usuario", JSON.stringify(usuario));
    console.log(localStorage.getItem("usuario"));
  }

  cargarDatos() {
    if (localStorage.getItem("token")) {
      this.token = localStorage.getItem("token");
      this.usuario = JSON.parse(localStorage.getItem("usuario"));
    } else {
      this.token = "";
      this.usuario = null;
      console.log("no hay token");
    }
  }
  estaLogueado() {
    return this.token.length > 4 ? true : false;
  }
}
