import { Injectable, Output, EventEmitter } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs/Rx";
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Usuario } from "src/app/models/usuario.model";
// import { URL_ENVIOS_BACK } from "src/config/config";
import { environment } from "../../../environments/environment.prod";
import "rxjs/add/operator/map";
import Swal from "sweetalert2";
import { bypassSanitizationTrustResourceUrl } from "@angular/core/src/sanitization/bypass";

@Injectable()
export class UsuarioService {
  token: string;
  usuario: Usuario;
  private messageSource = new BehaviorSubject<string>("algo");

  constructor(private _http: HttpClient, private _router: Router) {
    this.cargarDatos();
  }

  getUsuarioCool() {
    return this.messageSource.asObservable();
  }

  getUsuario(id: String): Observable<any> {
    let url = environment.backURL + `usuario/usuario/${id}`;
    return this._http.get(url);
  }

  crearUsuario(usuario: Usuario): Observable<any> {
    let url = environment.backURL + "usuario/usuario";

    return this._http
      .post(url, usuario)
      .map(resp => {
        return resp;
      })
      .catch(err => {
        console.log(err);
        if (err.error.errores.errors.email.kind != undefined) {
          Swal.fire(
            "Error",
            "El correo que quieres registrar ya existe",
            "error"
          );
          return Observable.throw(err); //ES PARA EL MANEJO DE LOS ERRORES
        } else {
          Swal.fire(
            "Error",
            "El correo que quieres registrar ya existe",
            "error"
          );
          return Observable.throw(err); //ES PARA EL MANEJO DE LOS ERRORES
        }
      });
  }

  setNewPass(pass, token): Observable<any> {
    const url = environment.backURL + "usuario/usuario/setNewPass";
    return this._http
      .post(url, token, pass)
      .map((resp: any) => {})
      .catch(err => {
        Swal.fire("Error", "No fue posible cambiar el password", "error");
        return Observable.throw(err);
      });
  }

  // VERIFICACION DE USUARIOS
  login(usuario: Usuario): Observable<any> {
    let url = environment.backURL + "autorizacion/login";

    let { email, password } = usuario;

    let credenciales = { email, password };

    return this._http
      .post(url, credenciales)
      .map((resp: any) => {
        this.token = resp.token;
        this.usuario = resp.usuario;
        this.guardarStorage(resp.id, resp.token, resp.usuario);
        this.messageSource.next("juanito");
        return resp;
      })
      .catch(err => {
        Swal.fire("Error", "Tu usuario o contraseña no son correctos", "error");
        return Observable.throw(err); //ES PARA EL MANEJO DE LOS ERRORES
      });
  }

  updateUser(user: Usuario, id): Observable<any> {
   
    let headers = new HttpHeaders().set("Authorization", this.token);

    const httpOptions = {
      headers
    };

    // const url = URL_ENVIOS_BACK + `usuario/usuario/${id}`;
    /*  const url = environment.backURL + 'usuario/usuario'; */
    const url = environment.backURL + `usuario/usuario/${id}`;
    const {
      nombre,
      apellido_paterno,
      apellido_materno,
      email,
      password,
      telefono
    } = user;
    const data = {
      nombre,
      apellido_paterno,
      apellido_materno,
      email,
      password,
      telefono
    };
    return this._http
      .put(url, data, httpOptions)
      .map((resp: any) => {
        return resp;
      })
      .catch(err => {
        Swal.fire("Error", "Revisa los datos ingresados", "error");
        return Observable.throw(err); // ES PARA EL MANEJO DE LOS ERRORES
      });
  }
  verificarRolAdmin() {
    if (localStorage.getItem("usuario")) {
      let usuario_temp: any = JSON.parse(localStorage.getItem("usuario"));

      if (
        usuario_temp.rol === "Administrador" ||
        usuario_temp.rol === "Administrador_Dev"
      ) {
        return true;
      }
    } else {
      return false;
    }
  }

  guardarStorage(id: string, token: string, usuario: Usuario) {
    localStorage.setItem("id", id);
    localStorage.setItem("token", token);
    localStorage.setItem("usuario", JSON.stringify(usuario));
  }

  cargarDatos() {
    if (localStorage.getItem("token")) {
      this.token = localStorage.getItem("token");
      this.usuario = JSON.parse(localStorage.getItem("usuario"));
    } else {
      this.token = "";
      this.usuario = null;
    }
  }
  estaLogueado() {
    if (localStorage.getItem("token")) {
      this.token = localStorage.getItem("token");
    }
    return this.token.length > 1 ? true : false;
  }

  renovarToken() {
    var headers = new HttpHeaders().set("Authorization", this.token);
    let url = environment.backURL + "autorizacion/renovartoken";
    const httpOptions = {
      headers
    };
    return this._http
      .post(url, {}, httpOptions)
      .map((respuesta: any) => {
        this.token = respuesta.token;
        localStorage.setItem("token", this.token);
        return true;
      })
      .catch(err => {
        Swal.fire(
          "Hubo un problema con tu sesion",
          "Es importante volver a proporcionar tus credenciales",
          "warning"
        );
        this.logOut();
        return Observable.throw(err);
      });
  }
  logOut() {
    this.token = "";
    this.usuario = null;
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
    }
    if (localStorage.getItem("usuario")) {
      localStorage.removeItem("usuario");
    }
    if (localStorage.getItem("id")) {
      localStorage.removeItem("id");
    }

    this._router.navigate(["/login"]);
  }
}
