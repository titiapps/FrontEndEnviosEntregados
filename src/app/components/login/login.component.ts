import { Component, OnInit } from "@angular/core";
import { UsuarioService } from "src/app/services/services.index";
import { Usuario } from "src/app/models/usuario.model";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  providers: [UsuarioService]
})
export class LoginComponent implements OnInit {
  email: string;
  usuario: Usuario = {
    nombre: "",
    apellido_materno: "",
    apellido_paterno: "",
    email: "",
    password: ""
  };
  constructor(private _usuarioService: UsuarioService) {}

  ngOnInit() {}

  ingresar() {
    this.usuario.email = "rodrigoh00per1@gmail.com";
    this.usuario.password = "1234567";

    this._usuarioService.login(this.usuario).subscribe(
      resp => {
        console.log(resp);
      },
      error => {
        console.log(error);
      }
    );
  }
}
