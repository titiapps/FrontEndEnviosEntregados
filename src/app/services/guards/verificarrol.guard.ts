import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { UsuarioService } from "../services.index";
import Swal from "sweetalert2";

@Injectable({
  providedIn: "root"
})

//Este guard nos permite saber si esta logueado o no el respectivo usuario
export class VerificarRolGuard implements CanActivate {
  constructor(
    private _usuarioService: UsuarioService,
    private _router: Router
  ) {}
  canActivate(): boolean {
    if (this._usuarioService.verificarRolAdmin()) {
      return true;
    } else {
      Swal.fire(
        "Permisos",
        "Los privilegios asignados no son suficientes para acceder a este apartado",
        "warning"
      );
     return false;
    }
  }
}
