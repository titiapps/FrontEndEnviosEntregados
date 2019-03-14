import { Component, OnInit, Input } from "@angular/core";
import { DireccionesService } from "src/app/services/services.index";
import { DireccionEnvio } from 'src/app/models/DireccionesEnvio.model';

@Component({
  selector: "app-tarifas",
  templateUrl: "./tarifas.component.html",
  styleUrls: ["./tarifas.component.css"]
})
export class TarifasComponent implements OnInit {
  origen:DireccionEnvio;
  destino:DireccionEnvio;

  constructor(private _direccionesService: DireccionesService) {
 this.origen=this._direccionesService.origen;
 this.destino = this._direccionesService.destino;
  
   /*  console.log(this._direccionesService.origen);
  
 */
  /*   this._direccionesService.cotizacion(this., this.lugarDestino, paquete)
    .subscribe(resp => {
      console.log(resp);
    }); */

  }

  ngOnInit() {
if (this.origen===undefined){
  console.log("bailaste muñeco");
}
console.log(this.origen);
console.log(this.destino);

  }
}
