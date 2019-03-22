import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CanActivate, Router } from "@angular/router";
import { UsuarioService } from "../usuario/usuario.service";

@Injectable({
  providedIn: "root"
})
export class VerificatokenGuard implements CanActivate {
  constructor(
    private _usuarioService: UsuarioService,
    private router: Router
  ) {}
  canActivate(): Promise<boolean> | boolean {
    let token = this._usuarioService.token;
    let payload = JSON.parse(atob(token.split(".")[1])); //LO SEPARO POR COMA Y QUIERO LA PRIMER PARTE

    let expirado = this.expirado(payload.exp);

    if (expirado) {
      this._usuarioService.logOut();
      return false;
    } else {
      this.VerificaRenueva(payload.exp);
      return true;
    }
  }
  VerificaRenueva(fechaexp: number): Promise<boolean> {
    return new Promise((resolve, reject) => {
      let tokenExp = new Date(fechaexp * 1000); //se necesita en milisegundos

      let ahora = new Date();

      ahora.setTime(ahora.getTime() + 4 * 60 * 60 * 1000); //aumentamos 4 horas

      if (tokenExp.getTime() > ahora.getTime()) {
        resolve(true);
      } else {
        this._usuarioService.renovarToken().subscribe(
          () => {
            resolve(true);
          },
          () => {
            this._usuarioService.logOut();
            // reject(false);
          }
        );
      }
    });
  }
  expirado(fechaexp: number) {
    let ahora = new Date().getTime() / 1000; //EN SEGUNDOS
    if (ahora < fechaexp) {
      return false;
    } else {
      return false; //no ha expirado
    }
  }
}
