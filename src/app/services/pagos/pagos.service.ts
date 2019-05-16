import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UsuarioService } from "../usuario/usuario.service";
import { HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
// import { URL_ENVIOS_BACK } from "src/config/config";
import { environment } from '../../../environments/environment.prod';
import { PagoData } from "src/app/models/PagoData.model";

@Injectable()
export class PagosService {
  pagoDataInfo: PagoData;
  constructor(
    private _http: HttpClient,
    private _usuarioService: UsuarioService
  ) {
    this.pagoDataInfo = {
      id_pago_plataforma: "",
      monto: null,
      forma_pago: ""
    };
  }

  realizarPagoConekta(
    token_conekta: any,
    precio: any,
    cantidad: Number,
    producto: String
  ) {
    var headers = new HttpHeaders()
      .set("Authorization", this._usuarioService.token)
      .set("token_public_conekta", token_conekta);

    const httpOptions = {
      headers
    };
    let url = environment.backURL + "conekta/pagarconekta";
    let body = { producto, precio, cantidad };
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
