import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UsuarioService } from '../usuario/usuario.service';
import {URL_ENVIOS_BACK} from '../../../config/config';



@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(
    private http: HttpClient,
    private userService: UsuarioService

  ) {
  }

  send(type: string) {
    const headers = new HttpHeaders().set(
      'Authorization',
      this.userService.token
    );
    const httpOptions = {
      headers
    };
    const data =  {type};

    const url = URL_ENVIOS_BACK + 'email/email';
    return this.http.post(url, data, httpOptions);
  }



}
