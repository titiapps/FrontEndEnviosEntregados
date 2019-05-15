import { Component, OnInit } from '@angular/core';
import { UsuarioService } from "src/app/services/services.index";
import { EmailService } from "src/app/services/services.index";
import { Usuario } from "src/app/models/usuario.model";
import Swal from "sweetalert2";
import { ActivatedRoute, Router } from "@angular/router";
import {
  MatSnackBarModule,
  MatSnackBar,
  MatSnackBarConfig
} from "@angular/material/snack-bar";

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css'],
  providers: [UsuarioService, EmailService]
})
export class DatosComponent implements OnInit {
  hide = true;
  private id: string;
  namePlace: string;
  lastPlace: string;
  surPlace: string;
  telPlace: any;
  emailPlace: string;
  user: Usuario;
  email: string;
  usuario: Usuario = {
    nombre: "",
    apellido_materno: "",
    apellido_paterno: "",
    email: "",
    password: "",
    telefono: null
  };

  constructor(
    private usuarioService: UsuarioService,
    private emailService: EmailService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.activatedRoute.params.subscribe(perfil => (this.id = perfil.id));
  }

  ngOnInit() {
    this.usuarioService.getUsuario(this.id).subscribe(resp => {
      this.usuario = resp;
      this.namePlace = this.usuario.nombre;
      this.lastPlace = this.usuario.apellido_paterno;
      this.surPlace = this.usuario.apellido_materno;
      this.emailPlace = this.usuario.email;
      this.telPlace = this.usuario.telefono;
    });
  }
  updateData() {
    // this.emailService.send('password');
    const config = new MatSnackBarConfig();
    config.panelClass = "custom-class";
    config.duration = 2000;
    this.usuarioService.updateUser(this.usuario, this.id).subscribe(
      (resp: any) => {
        if (resp.ok) {
          this.snackBar.openFromComponent(DataPizzaPartyComponent, config);
          this.router
            .navigateByUrl("/header", { skipLocationChange: true })
            .then(() => this.router.navigate(["/inicio"]));
        }
      },
      error => {
        console.log(error);
        Swal.fire("Error", "Revisa los datos ingresados...", "error");
      }
    );
  }
}

@Component({
  selector: 'app-snack-bar-component-example-snack',
  templateUrl: 'snackbar.html',
  styles: [
    `
      .example-pizza-party {
        color: #90ee90;
        background: "#D3D3D3";
      }
    `
  ]
})
export class DataPizzaPartyComponent {}
