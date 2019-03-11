import { Component, OnInit } from "@angular/core";
declare var Conekta: any;

@Component({
  selector: "app-conekta",
  templateUrl: "./conekta.component.html",
  styleUrls: ["./conekta.component.css"]
})
export class ConektaComponent implements OnInit {
  constructor() {
    Conekta.setPublicKey("key_EypWVrLqbLYcrmkqE5r9rqQ");
  }

  ngOnInit() {
    this.conseguirTokenConekta()
      .then(token => {
        console.log(token);
      })
      .catch(error => {
        console.log(error);
      });
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
