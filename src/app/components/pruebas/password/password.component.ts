import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailService} from 'src/app/services/services.index';
import { UsuarioService } from 'src/app/services/services.index';
import Swal from 'sweetalert2';
import {PizzaPartyComponent} from '../../login/login.component';


@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  hide = true;
  private token: any;
  password: string;
  passwordConf: string;
  constructor(private emailService: EmailService,
              private userService: UsuarioService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.params.subscribe(
      param => (this.token = param.token)
    );
  }

  ngOnInit() {
  }

  setNewPassword() {
    if (this.password === this.passwordConf) {
      this.userService.setNewPass(this.password, this.token).subscribe(
        (resp: any) => {
          if (resp.id !== undefined ) {
            this.router.navigateByUrl('/header', { skipLocationChange: true }).then(() => this.router.navigate(['/inicio']));
          }
        },
        error => {
        console.log(error);
        Swal.fire('Error', 'El correo no se encuentra en nuestro sistema', 'error');
        }
      );
    } else {
      Swal.fire('Error', 'Revisa los datos ingresados', 'error');
    }
  }
}
