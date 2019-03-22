import { Component, OnInit } from "@angular/core";
import {
  PagoEnvioService,
  DireccionesService
} from "src/app/services/services.index";

@Component({
  selector: "app-compra-envio",
  templateUrl: "./compra-envio.component.html",
  styleUrls: ["./compra-envio.component.css"]
})
//este componente es de cuando ya pagan la orden
export class CompraEnvioComponent implements OnInit {
  constructor(
    private _pagoEnvioService: PagoEnvioService,
    private _direccionesService: DireccionesService
  ) {
    let origen = this._direccionesService.origen;
    let destino = this._direccionesService.destino;
    this._pagoEnvioService.pagoParaEnvio(origen, destino).subscribe(resp => {
      console.log(resp);
    });
  }

  ngOnInit() {}
}
