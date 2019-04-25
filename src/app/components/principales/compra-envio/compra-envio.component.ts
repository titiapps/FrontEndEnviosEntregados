import { Component, OnInit } from "@angular/core";
import {
  PagoEnvioService,
  DireccionesService,
  PagosService
} from "src/app/services/services.index";
import { Router } from "@angular/router";

@Component({
  selector: "app-compra-envio",
  templateUrl: "./compra-envio.component.html",
  styleUrls: ["./compra-envio.component.css"]
})
//este componente es de cuando ya pagan la orden
export class CompraEnvioComponent implements OnInit {
  cargarEtiqueta: Number;
  constructor(
    private _pagoEnvioService: PagoEnvioService,
    private _direccionesService: DireccionesService,
    private _pagosService: PagosService,
    private _router: Router
  ) {
    this.cargarEtiqueta = 2;
  }

  async ngOnInit() {
    let origen = this._direccionesService.origen;
    let destino = this._direccionesService.destino;

    let pagoDataInfo = this._pagosService.pagoDataInfo;
    let tarifa_Paquete_Seleccionada = this._direccionesService
      .seleccionTarifaPaquete;

    this.cargarEtiqueta = 1;
    let respEnvio: any = await this.pagoParaEnvio(
      origen,
      destino,
      pagoDataInfo,
      tarifa_Paquete_Seleccionada
    );

    //aqui ya vamos a comprar la respectiva etiqueta de easypost
    let compraCompletada = null;
    try {
      compraCompletada = await this.comprarEtiqueta(
        respEnvio.envioGuardado.carrier_account_id,
        respEnvio.envioGuardado.shipment_id,
        respEnvio.envioGuardado.rate_id
      );
      console.log(compraCompletada);
    } catch (e) {
      console.log("Hubo un problema en la compra de la etiqueta");
      console.log(e);
    }

    this._pagoEnvioService
      .guardarMovimiento_Etiqueta(
        respEnvio.id_usuario,
        respEnvio.envioGuardado._id,
        respEnvio.id_pago_guardado,
        compraCompletada.compraCompletadaEtiqueta.postage_label.label_url,
        compraCompletada.compraCompletadaEtiqueta.tracking_code
      )
      .subscribe((respMovimiento: any) => {
        this._router.navigate([
          "/movimientos",
          respMovimiento.movimientoGuardado._id
        ]);
      });
  }
  //este es para la compra de la etiqueta
  comprarEtiqueta(carrier_account_id, shipment_id, rate_id) {
    return new Promise((resolve, reject) => {
      this._pagoEnvioService
        .comprarEtiqueta(carrier_account_id, shipment_id, rate_id)
        .subscribe(
          compraCompletadaEtiqueta => {
            resolve(compraCompletadaEtiqueta);
          },
          err => {
            reject(err);
          },
          () => {
            this.cargarEtiqueta = 0;
          }
        );
    });
  }

  //este es el que guarda todo antes de comprar la etiqueta
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
