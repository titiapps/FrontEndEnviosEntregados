import { Component, OnInit } from "@angular/core";
import { DireccionesService } from "src/app/services/services.index";
import { FormsModule, FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { startWith, map } from "rxjs/operators";
import { EventEmitter } from "protractor";
export interface User {
  name: string;
}
@Component({
  selector: "app-inicio",
  templateUrl: "./inicio.component.html",
  styleUrls: ["./inicio.component.css"]
})
export class InicioComponent implements OnInit {
  lugarOrigen: any;
  lugarDestino: any;
  terminoBusqueda: FormControl;
  lugares = <any>[];

  constructor(private _direccionesService: DireccionesService) {
    this.terminoBusqueda = new FormControl();
  }

  ngOnInit() {
    this.terminoBusqueda.valueChanges.subscribe(termino => {
      if (termino != "") {
        this._direccionesService.busquedaLugares(termino).subscribe(data => {
          this.lugares = data.suggestions as any[];
          /*    console.log(this.lugares); */
        });
      }
    });
  }
  //En este capturamos el destino y de ahi ya lo recorremos
  seleccionarDestino(index, tipo) {
    if (tipo === "origen") {
      this.lugarOrigen = this.lugares[index];
      console.log("El lugar de origen es ");
      console.log(this.lugarOrigen);
    } else {
      this.lugarDestino = this.lugares[index];
      console.log("El lugar de destino es ");
      console.log(this.lugarDestino);
    }
  }
}
