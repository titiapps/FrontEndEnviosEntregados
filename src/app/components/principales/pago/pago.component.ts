import { Component, OnInit } from "@angular/core";
import { PagosService } from "src/app/services/services.index";
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
  constructor(private _pagoService: PagosService, private _router: Router) {
    Conekta.setPublicKey("key_EypWVrLqbLYcrmkqE5r9rqQ");
  }

  ngOnInit() {
    /*  this.conseguirTokenConekta()
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
        ); */
    // });
  }

  conseguirTokenConekta() {
    return new Promise((resolve, reject) => {
      var tokenParams = {
        card: {
          number: "4242424242424242",
          name: "Fulanito Pérez",
          exp_year: "2020",
          exp_month: "12",
          cvc: "123"
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
}
