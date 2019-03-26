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
  ) {}

  async ngOnInit() {
    let origen = this._direccionesService.origen;
    let destino = this._direccionesService.destino;

    let pagoDataInfo = this._pagosService.pagoDataInfo;
    let tarifa_Paquete_Seleccionada = this._direccionesService
      .seleccionTarifaPaquete;

    let respEnvio: any = await this.pagoParaEnvio(
      origen,
      destino,
      pagoDataInfo,
      tarifa_Paquete_Seleccionada
    );

    //aqui ya vamos a comprar la respectiva etiqueta de easypost
    this._pagoEnvioService
      .comprarEtiqueta(
        respEnvio.envioGuardado.carrier_account_id,
        respEnvio.envioGuardado.shipment_id,
        respEnvio.envioGuardado.rate_id
      )
      .subscribe(
        resp => {
          console.log(resp);
        },
        err => {
          console.log(err);
        }
      );
  }

  pagoParaEnvio(origen, destino, pagoDataInfo, tarifa_Paquete_Seleccionada) {
    return new Promise((resolve, reject) => {
      this._pagoEnvioService
        .pagoParaEnvio(
          origen,
          destino,
          pagoDataInfo,
          tarifa_Paquete_Seleccionada
        )
        .subscribe(
          (respenv: any) => {
            resolve(respenv);
          },
          err => {
            reject(err); //este es el error a guardar en la base de datos princess
          },
          () => {}
        );
    });
  }
}
