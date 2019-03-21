import { Component, OnInit, Input } from "@angular/core";
import { DireccionesService } from "src/app/services/services.index";
import { DireccionEnvio } from "src/app/models/DireccionesEnvio.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-tarifas",
  templateUrl: "./tarifas.component.html",
  styleUrls: ["./tarifas.component.css"]
})
export class TarifasComponent implements OnInit {
  origen: DireccionEnvio;
  destino: DireccionEnvio;
  paquetes: Array<any>;
  cotizaciones: Array<any>;
  cargando: boolean;

  constructor(
    private _direccionesService: DireccionesService,
    private _router: Router
  ) {
    this.origen = this._direccionesService.origen;
    this.destino = this._direccionesService.destino;
    this.paquetes = this._direccionesService.paquetes;
    this.cotizaciones = [];
    this.cargando = true;
  }

  ngOnInit() {
    if (this.origen === undefined && this.destino == undefined) {
      console.log("bailaste muñeco");
    } else {
      this._direccionesService
        .cotizacion(this.origen, this.destino, this.paquetes[0])
        .subscribe(
          (tarif: any) => {
            this.cotizaciones.push(tarif);
          },
          error => {
            console.log(error);
          },
          () => {
            //este para cuando ya se completo
            console.log(this.cotizaciones);
            this.cargando = false;
          }
        );
    }
  }
  escogerTarifa(i, j) {
    console.log(i);
    console.log(j);
    this._router.navigate(["/pago"]);
  }

  //vamos a suscribirnos para que nos traiga las tarifas
}
