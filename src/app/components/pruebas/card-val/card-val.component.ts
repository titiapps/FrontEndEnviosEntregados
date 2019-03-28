import { Component, OnInit } from "@angular/core";
import { CreditCardValidator } from "angular-cc-library";
import { Card } from "../../../models/card.model";
import { FormBuilder, FormGroup, NgForm, Validators } from "@angular/forms";

@Component({
  selector: "app-card-val",
  templateUrl: "./card-val.component.html",
  styleUrls: ["./card-val.component.css"],
  providers: []
})
export class CardValComponent implements OnInit {
   form: FormGroup;
  card: Card;
 submitted: boolean;

  constructor(private _fb: FormBuilder) {
    this.card = {
      name: "",
      number: 0,
      exp_month: 0,
      exp_year: 0,
      cvc: 0
    };
  }

  ngOnInit() {
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
      ] // TODO compare actual results against card type
    });
  }



  onSubmit(form) {
    this.submitted = true;
    this.card.number = form.value.creditCard;
    this.card.exp_month = form.value.expDate.toString().slice(0, 2);
    this.card.exp_year = form.value.expDate.toString().slice(5, 7);

  }
}
