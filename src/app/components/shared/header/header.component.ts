import { Component, OnInit } from "@angular/core";
import { UsuarioService } from "src/app/services/services.index";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  logueado: Boolean;
  constructor(private _usuarioService: UsuarioService) {
    if (localStorage.getItem("token")) {
      this.logueado = true;
    }
  }

  ngOnInit() {}
  cerrarSesio() {
    this._usuarioService.logOut();
    this.logueado = false;
  }
}
