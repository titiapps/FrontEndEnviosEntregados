import { Component, OnInit } from "@angular/core";
import { DireccionesService } from "src/app/services/services.index";
import { FormsModule, FormControl } from "@angular/forms";
import { DireccionEnvio } from "src/app/models/DireccionesEnvio.model";

export interface User {
  name: string;
}
@Component({
  selector: "app-inicio",
  templateUrl: "./inicio.component.html",
  styleUrls: ["./inicio.component.css"]
})
export class InicioComponent implements OnInit {
  lugares = <any>[]; //este nos sirve para que ahi guarde las busquedas de here
  lugarOrigen: any;
  lugarDestino: any;
  origen: DireccionEnvio;
  destino: DireccionEnvio;
  busquedaDir: FormControl;

  constructor(private _direccionesService: DireccionesService) {
    this.busquedaDir = new FormControl();
  }

  ngOnInit() {
    //este es para escuchar los cambios y asi poner generar el autocompletado
    this.busquedaDir.valueChanges.subscribe(termino => {
      if (termino != "") {
        this._direccionesService.busquedaLugares(termino).subscribe(data => {
          this.lugares = data.suggestions as any[];
        });
      }
    });
  }

  /* En este asignamos hacia que lado se va a ir esa madre */
  seleccionarOrigen(index) {
    console.log(this.lugares[index]);
    this.lugarOrigen = this.lugares[index];
  }
  seleccionarDestino(index) {
    console.log(this.lugares[index]);
    this.lugarDestino = this.lugares[index];
  }

  //SE EVALUA QUE TENGA UNA DIRECCION RELATIVAMENTE COMPLETA
  evaluarDatosDireccion() {
    let ori = this.lugarOrigen.address; //origen de los datos buscados
    let countryCode_ori = this.lugarOrigen.countryCode;

    let dest = this.lugarDestino.address; //destino de los datos buscados
    let countryCode_dest = this.lugarDestino.countryCode;

    let arrayorigen = [
      ori.street,
      ori.houseNumber,
      ori.city,
      ori.state,
      ori.postalCode,
      ori.country
    ];
    let arraydestino = [
      dest.street,
      dest.houseNumber,
      dest.city,
      dest.state,
      dest.postalCode,
      dest.country
    ];

    let resultadoorigen = arrayorigen.filter(
      elemento => elemento !== undefined
    );
    let resultadodestino = arraydestino.filter(
      elemento => elemento !== undefined
    );
    if (resultadoorigen.length === 6 && resultadodestino.length === 6) {
      console.log("direccion completa");
      let origen = {
        street: ori.street,
        street2: "",
        houseNumber: ori.houseNumber,
        city: ori.city,
        state: ori.state,
        postalCode: ori.postalCode,
        country: ori.country,
        county: ori.county,
        countryCode: countryCode_ori
      };

      let destino = {
        street: dest.street,
        street2: "",
        houseNumber: dest.houseNumber,
        city: dest.city,
        state: dest.state,
        postalCode: dest.postalCode,
        country: dest.country,
        county: dest.county,
        countryCode: countryCode_dest
      };

      this.asignarValores(origen, destino);
    } else {
      console.log("incompleta direccion");
    }
  }

  //Este se guarda en un objeto una vez que se verifico que todo estuviera al tiro
  asignarValores(origen, destino) {
    this.origen = origen;
    this.origen.persona = "PERSONA 1 PRUEBA";

    this.destino = destino;
    this.destino.persona = "PERSONA 2 PRUEBA";

    let paquete = { longitud: 9, anchura: 6, altura: 2, peso: 10 };

    this._direccionesService
      .cotizacion(origen, destino, paquete)
      .subscribe(resp => {
        console.log(resp);
      });
  }
}
