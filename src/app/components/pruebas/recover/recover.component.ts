import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailService} from 'src/app/services/services.index';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.css']
})
export class RecoverComponent implements OnInit {

  email: string;
  constructor(private emailService: EmailService,
              private router: Router) { }

  ngOnInit() {
  }
  passRecovery() {
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
