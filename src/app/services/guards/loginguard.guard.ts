import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { UsuarioService } from "../services.index";
import Swal from "sweetalert2";

@Injectable({
  providedIn: "root"
})

//Este guard nos permite saber si esta logueado o no el respectivo usuario
export class LoginguardGuard implements CanActivate {
  constructor(
    private _usuarioService: UsuarioService,
    private _router: Router
  ) {}
  canActivate(): boolean {
    if (this._usuarioService.estaLogueado()) {
      console.log("estoy logueado");
      return true;
    } else {
      Swal.fire(
        "Credenciales",
        "Necesitas iniciar sesion para poder acceder a este apartado",
        "warning"
      );
      this._router.navigate(["/login"]);
      return false;
    }
  }
}
