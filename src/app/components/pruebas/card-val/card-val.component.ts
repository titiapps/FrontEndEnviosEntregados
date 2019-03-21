import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreditCardValidator } from 'angular-cc-library';
import {Card} from '../../../models/card.model';
import {FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-card-val',
  templateUrl: './card-val.component.html',
  styleUrls: ['./card-val.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class CardValComponent implements OnInit {
  private form: FormGroup;

  card: Card;
  private submitted: boolean;

  constructor(config: NgbModalConfig, private modalService: NgbModal, private _fb: FormBuilder) {
    config.backdrop = 'static';
    config.keyboard = false;
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
      creditCard: ['', [<any>CreditCardValidator.validateCCNumber]],
      expDate: ['', [<any>CreditCardValidator.validateExpDate]],
      cvc: ['', [<any>Validators.required, <any>Validators.minLength(3), <any>Validators.maxLength(4)]] // TODO compare actual results against card type
    });
  }

  open(content) {
    this.modalService.open(content);
  }

  onSubmit(form) {
    this.submitted = true;
    this.card.number = form.value.creditCard;
    this.card.exp_month = form.value.expDate.toString().slice(0, 2);
    this.card.exp_year = form.value.expDate.toString().slice(5, 7);

    console.log(form);
  }
}
