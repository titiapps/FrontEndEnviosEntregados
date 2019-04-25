import { Component, OnInit } from "@angular/core";
import { UsuarioService } from "src/app/services/services.index";
import { Usuario } from "src/app/models/usuario.model"
import Swal from "sweetalert2";
import { Router } from "@angular/router";
import {
  MatSnackBarModule,
  MatSnackBar,
  MatSnackBarConfig
} from "@angular/material/snack-bar";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  providers: [UsuarioService]
})
export class LoginComponent implements OnInit {
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
  constructor(
    private _usuarioService: UsuarioService,
    private _router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {}

  ingresar() {
    let config = new MatSnackBarConfig();
    config.panelClass = "custom-class";
    config.duration = 2000;
    this._usuarioService.login(this.usuario).subscribe(
      (resp: any) => {
        if (resp.id != undefined) {
          this._snackBar.openFromComponent(PizzaPartyComponent, config);
          this._router
            .navigateByUrl("/header", { skipLocationChange: true })
            .then(() => this._router.navigate(["/inicio"]));
        }
      },
      error => {
        console.log(error);
        Swal.fire("Error de login", "Revisa tus credenciales...", "error");
      }
    );
  }
}

@Component({
  selector: "snack-bar-component-example-snack",
  templateUrl: "snackbar.html",
  styles: [
    `
      .example-pizza-party {
        color: #90ee90;
        background: "#D3D3D3";
      }
    `
  ]
})
export class PizzaPartyComponent {}
