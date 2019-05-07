import { Component, OnInit } from "@angular/core";
import { UsuarioService } from "src/app/services/services.index";
import { Usuario } from "src/app/models/usuario.model";
import { NgForm } from "@angular/forms";
import { FormControl, FormGroupDirective, Validators } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import {Router} from '@angular/router';
import Swal from "sweetalert2";


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
  constructor(    private _router: Router,
                  private _usuarioService: UsuarioService) {}

  ngOnInit() {}

  guardar() {
    console.log(this.usuario);


    this._usuarioService.crearUsuario(this.usuario).subscribe(
      resp => {
        console.log(resp);
        Swal.fire(
          "Usuario registrado con exito!",
          "Bienvenido a Entregando!!!",
          "success"
        );
        this._router.navigate(['/login']);
      },
      error => {
        console.log(error);
        Swal.fire(
          "Error de registro",
          "Ooops!!! Revisa que tus sean correctos...",
          "error"
        );
      }
    );
  }
}
