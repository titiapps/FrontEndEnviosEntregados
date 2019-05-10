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

  recovery(email: string) {
    const data =  {email};

    const url = URL_ENVIOS_BACK + 'usuario/usuario/recovery';
    return this.http.post(url, data);
  }



}
