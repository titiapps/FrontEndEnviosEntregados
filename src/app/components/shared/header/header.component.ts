import { Component, OnInit, ChangeDetectorRef, NgZone } from "@angular/core";
import { UsuarioService } from "src/app/services/services.index";
import { Observable } from "rxjs";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  logueado: Boolean;
  usuarin: Observable<any>;
  usuario: any;
  constructor(private _usuarioService: UsuarioService) {
    this.usuario = null;
    if (localStorage.getItem("token")) {
      this.logueado = true;
    }
  }

  ngOnInit() {
    this.usuario = this._usuarioService.usuario;
    if (localStorage.getItem("usuario")) {
      this.usuario = JSON.parse(localStorage.getItem("usuario"));
    }
  }

  cerrarSesio() {
    this._usuarioService.logOut();
    this.logueado = false;
  }
}
