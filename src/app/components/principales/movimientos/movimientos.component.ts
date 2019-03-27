import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { MovimientosService } from "src/app/services/services.index";

@Component({
  selector: "app-movimientos",
  templateUrl: "./movimientos.component.html",
  styleUrls: ["./movimientos.component.css"]
})
export class MovimientosComponent implements OnInit {
  id_movimiento: String;
  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _movimientosService: MovimientosService
  ) {
    this._activatedRoute.params.subscribe(params => {
      this.id_movimiento = params.id;
    });
  }

  ngOnInit() {
    this._movimientosService
      .regresarInformacionMovimiento(this.id_movimiento)
      .subscribe(resp => {
        console.log(resp);
      });
  }
}
