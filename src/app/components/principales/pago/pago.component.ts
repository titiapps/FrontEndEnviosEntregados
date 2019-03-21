import { Component, OnInit } from "@angular/core";
import {
  PagosService,
  DireccionesService
} from "src/app/services/services.index";
import Swal from "sweetalert2";
import { Router } from "@angular/router";
declare var Conekta: any;

@Component({
  selector: "app-pago",
  templateUrl: "./pago.component.html",
  styleUrls: ["./pago.component.css"]
})
export class PagoComponent implements OnInit {
  token_conekta: String;
  seleccionUsuario: any;
  private datos_pago: any;
  constructor(
    private _pagoService: PagosService,
    private _router: Router,
    private _direccionesService: DireccionesService
  ) {
    Conekta.setPublicKey("key_EypWVrLqbLYcrmkqE5r9rqQ");
    this.datos_pago = {
      numero_tarjeta: "",
      ano: "",
      mes: "",
      cvc: "",
      nombre: ""
    };
  }

  ngOnInit() {
    this.seleccionUsuario = this._direccionesService.seleccionTarifaUsuario;
  }

  conseguirTokenConekta() {
    return new Promise((resolve, reject) => {
      var tokenParams = {
        card: {
          number: this.datos_pago.numero_tarjeta,
          name: this.datos_pago.nombre,
          exp_year: this.datos_pago.ano,
          exp_month: this.datos_pago.mes,
          cvc: this.datos_pago.cvc
        }
      };
      Conekta.Token.create(
        tokenParams,
        token => {
          resolve(token);
        },
        error => {
          reject(error);
        }
      );
    });
  }
  realizarPago() {
    this.conseguirTokenConekta()
      .then((token: any) => {
        console.log(token);
        this.token_conekta = token.id;
        this._pagoService.realizarPagoConekta(this.token_conekta).subscribe(
          resp => {
            Swal.fire(
              "Finalizado",
              "Tu pago se realizo de manera correcta",
              "success"
            );
            console.log(resp);
          },
          error => {
            console.log(error);
            Swal.fire(
              "Error de Pago",
              "Hubo un problema al realizar la transacción",
              "error"
            );
            this._router.navigate(["/inicio"]);
          }
        );
      })
      .catch(err => {
        Swal.fire(
          "Error de Validacion",
          "Hubo un problema con los datos de tu tarjeta verificala",
          "error"
        );
      });
  }
}
