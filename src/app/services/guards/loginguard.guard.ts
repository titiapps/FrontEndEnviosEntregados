import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { UsuarioService } from "../services.index";

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
    console.log("estoy entrando al guard");
    if (this._usuarioService.estaLogueado()) {
      return true;
    } else {
      this._router.navigate(["/login"]);
      console.log("no esta logueado el chavo");
    }
  }
}
