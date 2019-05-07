import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailService} from 'src/app/services/services.index';
import Swal from 'sweetalert2';
import {PizzaPartyComponent} from '../../login/login.component';


@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  private token: any;
  password: string;
  passwordConf: string;
  constructor(private emailService: EmailService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.params.subscribe(
      param => (this.token = param.token)
    );
  }

  ngOnInit() {
  }

  setNewPassword() {
    this.emailService.send('password').subscribe(
      (resp: any) => {
        if (resp.id !== undefined) {
          this.router.navigateByUrl('/header', { skipLocationChange: true }).then(() => this.router.navigate(['/inicio']));
        }
      },
      error => {
        console.log(error);
        Swal.fire('Error', 'El correo no se encuentra en nuestro sistema', 'error');
      }
    );
  }

}
