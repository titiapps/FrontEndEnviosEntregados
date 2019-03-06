import { Component, OnInit, Injectable } from '@angular/core';
import { UsuarioService } from 'src/app/services/services.index';
import { Usuario } from 'src/app/models/usuario.model';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css'],
  providers:[UsuarioService]
})
export class RegistrarComponent implements OnInit {

user: Usuario = {
nombre: null,
apellido_materno: null,
apellido_paterno: null,
email: null,
password: null
};

 constructor
  ( 
   private  _userService: UsuarioService,
   private  _router: Router
  ) 
  { 
   

  }
guardar(forma)
{
   console.log("jsdja");
   console.log(this.user);
   this._userService.crearUsuario(this.user).subscribe(resp=>{
     console.log(resp);
   })
}


 

  ngOnInit() {
  }

}
