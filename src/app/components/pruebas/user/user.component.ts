import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/services.index';
import { Usuario } from 'src/app/models/usuario.model'
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import {
  MatSnackBarModule,
  MatSnackBar,
  MatSnackBarConfig
} from '@angular/material/snack-bar';
import {PizzaPartyComponent} from '../../login/login.component';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UsuarioService]

})
export class UserComponent implements OnInit {

  hide = true;
  email: string;
  usuario: Usuario = {
    nombre: '',
    apellido_materno: '',
    apellido_paterno: '',
    email: '',
    password: '',
    telefono: null
  };

  constructor( private usuarioService: UsuarioService,
               private router: Router,
               private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  updateData() {
    const config = new MatSnackBarConfig();
    config.panelClass = 'custom-class';
    config.duration = 2000;
    this.usuarioService.updateUser(this.usuario).subscribe(
      (resp: any) => {
        if (resp.id !== undefined) {
          this.snackBar.openFromComponent(PizzaPartyComponent, config);
          this.router
            .navigateByUrl('/header', { skipLocationChange: true })
            .then(() => this.router.navigate(['/inicio']));
        }
      },
      error => {
        console.log(error);
        Swal.fire('Error', 'Revisa los datos ingresados...', 'error');
      }
    );
  }

}



@Component({
  selector: 'snack-bar-component-example-snack',
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
export class AppPizzaPartyComponent {}
