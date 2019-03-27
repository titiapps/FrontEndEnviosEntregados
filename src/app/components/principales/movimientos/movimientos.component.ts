import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { MovimientosService } from "src/app/services/services.index";
import { HttpClient } from "@angular/common/http";
import { DomSanitizer } from "@angular/platform-browser";
import { Observable } from "rxjs";

@Component({
  selector: "app-movimientos",
  templateUrl: "./movimientos.component.html",
  styleUrls: ["./movimientos.component.css"]
})
export class MovimientosComponent implements OnInit {
  id_movimiento: String;
  etiqueta: String;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _movimientosService: MovimientosService,
    private _http: HttpClient,
    private domSanitizer: DomSanitizer
  ) {
    this._activatedRoute.params.subscribe(params => {
      this.id_movimiento = params.id;
    });
  }

  async ngOnInit() {
    let respuesta: any = await this.regresarInformacionMovimiento(
      this.id_movimiento
    );

    this.etiqueta = respuesta.res_movimiento.etiqueta;
    console.log(this.etiqueta);
  }

  //esta nos regresa la informacion completa ocn el movimiento que se hizo para generar la etiqueta
  regresarInformacionMovimiento(id_movimiento) {
    return new Promise((resolve, reject) => {
      this._movimientosService
        .regresarInformacionMovimiento(id_movimiento)
        .subscribe(
          (resp: any) => {
            resolve(resp);
          },
          err => {
            reject(err);
          }
        );
    });
  }
}
