import { Component, OnInit } from "@angular/core";
import { UsuarioService } from "src/app/services/services.index";
import { Usuario } from "src/app/models/usuario.model";
import { NgForm } from "@angular/forms";
import { FormControl, FormGroupDirective, Validators } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";

@Component({
  selector: "app-login",
  templateUrl: "./registrar.component.html",
  styleUrls: ["./registrar.component.css"],
  providers: [UsuarioService]
})
export class RegistrarComponent implements OnInit {
  hide = true;
  email: string;
  usuario: Usuario = {
    nombre: "",
    apellido_materno: "",
    apellido_paterno: "",
    email: "",
    password: "",
    telefono: null
  };
  constructor(private _usuarioService: UsuarioService) {}

  ngOnInit() {}

  guardar() {

    this._usuarioService.crearUsuario(this.usuario).subscribe(
      resp => {
        console.log(resp);
      },
      error => {
        console.log(error);
      }
    );
  }
}
