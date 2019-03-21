/*import { Component, OnInit, Injectable } from "@angular/core";
import { UsuarioService } from "src/app/services/services.index";
import { Usuario } from "src/app/models/usuario.model";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { FormControl, FormGroupDirective, Validators } from "@angular/forms";
import {ErrorStateMatcher} from '@angular/material/core';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}




@Component({
  selector: "app-registrar",
  templateUrl: "./registrar.component.html",
  styleUrls: ["./registrar.component.css"],
  providers: [UsuarioService]
})
export class RegistrarComponent implements OnInit {
  
  formaControl = new FormControl('', [
    Validators.required
    //Validators.minLength(3),
  ]);

  nameControl = new FormControl('',[
   Validators.required
  ]);

  firstSurNameControl = new FormControl('',[

    Validators.required

   ]);

   secondSurNameControl = new FormControl('',[

    Validators.required

   ]);

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();
  
  
  
  hide=true;
  user: Usuario = {
    nombre: null,
    apellido_materno: null,
    apellido_paterno: null,
    email: null,
    password: null
  };

  constructor(private _userService: UsuarioService, private _router: Router) {}
  ngOnInit() {}
 
  guardar() {
    console.log("jsdja");
    console.log(this.user);

    this._userService.crearUsuario(this.user).subscribe(resp => {
      console.log(resp);
      
    },
    error => {
      console.log(error);
    }
  );
}

 
}*/

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
    /*     this.usuario.email = "rodrigoh00per1@gmail.com";
    this.usuario.password = "1234567"; */

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
