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
          number: "4152313344278284",
          name: "Rodrigo Bolita Perez",
          exp_year: "22",
          exp_month: "09",
          cvc: "346"
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
