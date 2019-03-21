import { Component, OnInit } from "@angular/core";
import {
  PagosService,
  DireccionesService
} from "src/app/services/services.index";
import Swal from "sweetalert2";
import { Router } from "@angular/router";
import { CreditCardValidator } from "angular-cc-library";
import { FormBuilder, FormGroup, NgForm, Validators } from "@angular/forms";

declare var Conekta: any;

@Component({
  selector: "app-pago",
  templateUrl: "./pago.component.html",
  styleUrls: ["./pago.component.css"]
})
export class PagoComponent implements OnInit {
  form: FormGroup;
  submitted: boolean;

  token_conekta: String;
  seleccionUsuario: any;
  private datos_pago: any;
  constructor(
    private _fb: FormBuilder,
    private _pagoService: PagosService,
    private _router: Router,
    private _direccionesService: DireccionesService
  ) {
    Conekta.setPublicKey("key_EypWVrLqbLYcrmkqE5r9rqQ");
    this.datos_pago = {
      numero_tarjeta: "",
      fecha: "",
      cvc: "",
      nombre: ""
    };
  }

  ngOnInit() {
    this.seleccionUsuario = this._direccionesService.seleccionTarifaUsuario;
    this.form = this._fb.group({
      creditCard: ["", [<any>CreditCardValidator.validateCCNumber]],
      expDate: ["", [<any>CreditCardValidator.validateExpDate]],
      cvc: [
        "",
        [
          <any>Validators.required,
          <any>Validators.minLength(3),
          <any>Validators.maxLength(4)
        ]
      ]
    });
  }

  conseguirTokenConekta() {
    return new Promise((resolve, reject) => {
      var tokenParams = {
        card: {
          number: this.datos_pago.numero_tarjeta,
          name: this.datos_pago.nombre,
          exp_year: this.datos_pago.fecha.toString().slice(5, 7),
          exp_month: this.datos_pago.fecha.toString().slice(0, 2),
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
    this.submitted = true;
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
            //aqui mandamos los datos al backend
            this._router.navigate(["/compraEnvio"]);
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
