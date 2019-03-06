import { Component, OnInit } from "@angular/core";
import { UsuarioService } from "src/app/services/services.index";
import { Usuario } from "src/app/models/usuario.model";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-registrar",
  templateUrl: "./registrar.component.html",
  styleUrls: ["./registrar.component.css"],
  providers: [UsuarioService]
})
export class RegistrarComponent implements OnInit {

  user: Usuario;
  constructor(private _usuarioService: UsuarioService) {
    this.user = {
      nombre: "",
      apellido_paterno: "",
      apellido_materno: "",
      email: "",
      password: ""
    };
  }

  ngOnInit() {}
}
