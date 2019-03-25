import { Component, OnInit } from "@angular/core";
import {
  PagoEnvioService,
  DireccionesService,
  PagosService
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
    private _direccionesService: DireccionesService,
    private _pagosService: PagosService
  ) {
    let origen = this._direccionesService.origen;
    let destino = this._direccionesService.destino;
    let pagoDataInfo = this._pagosService.pagoDataInfo;
    let paqueteSeleccionado = this._direccionesService.seleccionTarifaUsuario;
    this._pagoEnvioService
      .pagoParaEnvio(origen, destino, pagoDataInfo,paqueteSeleccionado)
      .subscribe(resp => {
        console.log(resp);
      });
  }

  ngOnInit() {}
}
