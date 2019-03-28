import { Component, OnInit } from "@angular/core";
import {
  PagosService,
  DireccionesService
} from "src/app/services/services.index";
import Swal from "sweetalert2";
import { Router } from "@angular/router";
import { CreditCardValidator } from "angular-cc-library";
import { FormBuilder, FormGroup, NgForm, Validators } from "@angular/forms";
import swal from 'sweetalert2';

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
      number: "",
      exp_month: "",
      exp_year: "",
      cvc: "",
      nombre: ""
    };
  }

  ngOnInit() {
    this.seleccionUsuario = this._direccionesService.seleccionTarifaPaquete; //esta es la seleccion de paquete que hizo el usuario
    console.log(this.seleccionUsuario);
    this.form = this._fb.group({
      nombre: "",
      creditCard: ["", [<any>CreditCardValidator.validateCCNumber]],
      expDate: [
        "",
        [
          <any>CreditCardValidator.validateExpDate,
          <any>Validators.minLength(9),
          <any>Validators.maxLength(10)
        ]
      ],
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
      console.log(this.datos_pago);
      const tokenParams = {
        card: {
          number: this.datos_pago.number,
          name: this.datos_pago.nombre,
          exp_year: this.datos_pago.exp_year,
          exp_month: this.datos_pago.exp_month,
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
          (resp: any) => {
            //asignamos los datos  para poder mandar al backend
            this._pagoService.pagoDataInfo = {
              id_pago_plataforma: resp.id,
              forma_pago: "Tarjeta",
              monto: this.seleccionUsuario.costo //recuerda que aqui puede ser diferente porque puede enviarse mas envios
            };

            console.log(resp);
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

  onSubmit(form) {
    this.submitted = true;
    if (form.get('creditCard').invalid && form.get('expDate').invalid && form.get('cvc').invalid ) {

      Swal.fire(
        "Existe un error con los datos de tu tarjeta",
        "Verifica tus datos",
        "error"
      );
      // location.reload();
    } else {
      /* this.datos_pago.nombre = form.value.nombre;
      this.datos_pago.number = form.value.creditCard;
      this.datos_pago.exp_month = form.value.expDate.slice(0, 2);
      this.datos_pago.exp_year = form.value.expDate.slice(5, 9);
      this.datos_pago.cvc = form.value.cvc; */

      this.datos_pago.nombre = "Fulanito Perez";
      this.datos_pago.number = "4242424242424242";
      this.datos_pago.exp_month = 12;
      this.datos_pago.exp_year = 2020;
      this.datos_pago.cvc = 123; //no estaba pedazo de
      /*    console.log(this.datos_pago); */
      this.realizarPago();

      console.log(form);
    }
  }
}