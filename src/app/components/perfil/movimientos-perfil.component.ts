import { Component, OnInit, Input, LOCALE_ID } from "@angular/core";
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter
} from "@angular/material-moment-adapter";
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE
} from "@angular/material/core";
import { registerLocaleData } from "@angular/common";
import localeMX from "@angular/common/locales/es-MX";
registerLocaleData(localeMX, "es-MX");
@Component({
  selector: "app-movimientos-perfil",
  templateUrl: "./movimientos-perfil.component.html",
  styleUrls: ["./movimientos-perfil.component.css"],
  providers: [{ provide: LOCALE_ID, useValue: "es-MX" }]
})
export class MovimientosPerfilComponent implements OnInit {
  @Input() movimientos: Array<any>;
  constructor() {}

  ngOnInit() {
    console.log(this.movimientos);

  }
}
