import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UsuarioService } from "../usuario/usuario.service";
import { HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { URL_ENVIOS_BACK } from "src/config/config";

@Injectable()
export class PagosService {
  constructor(
    private _http: HttpClient,
    private _usuarioService: UsuarioService
  ) {}

  realizarPagoConekta(token_conekta: any) {
    var headers = new HttpHeaders()
      .set("Authorization", this._usuarioService.token)
      .set("token_public_conekta", token_conekta);

    const httpOptions = {
      headers
    };
    let url = URL_ENVIOS_BACK + "conekta/pagarconekta";
    let body = { producto: "Galletas Maria", precio: 50, cantidad: 1 };
    return this._http
      .post(url, body, httpOptions)
      .map(resp => {
        return resp;
      })
      .catch(err => {
        return Observable.throw(err);
      });
  }
}
