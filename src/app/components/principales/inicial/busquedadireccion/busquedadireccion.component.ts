import { Component, OnInit, ɵConsole, Inject } from "@angular/core";
import { Router } from "@angular/router";
import { DireccionesService } from "src/app/services/services.index";
import { FormControl } from "@angular/forms";
import { DireccionEnvio } from "src/app/models/DireccionesEnvio.model";
import { Paquete } from "src/app/models/paquete.model";
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from "@angular/material";
import Swal from "sweetalert2";

export interface User {
  name: string;
}

@Component({
  selector: "app-busquedadireccion",
  templateUrl: "./busquedadireccion.component.html",
  styleUrls: ["./busquedadireccion.component.css"]
})
export class BusquedadireccionComponent implements OnInit {
  lugares = <any>[]; // este nos sirve para que ahi guarde las busquedas de here
  lugarOrigen: DireccionEnvio;
  lugarDestino: DireccionEnvio;
  paquete: Paquete;
  busquedaDir: FormControl;
  nombreOrig: FormControl;
  nombreDest: FormControl;
  alto: FormControl;
  largo: FormControl;
  ancho: FormControl;
  peso: FormControl;
  nameOrig: string;
  nameDest: string;

  constructor(
    private _direccionesService: DireccionesService,
    private _router: Router,
    public dialog: MatDialog
  ) {
    this.busquedaDir = new FormControl();
    this.nombreOrig = new FormControl();
    this.nombreDest = new FormControl();
    this.alto = new FormControl();
    this.largo = new FormControl();
    this.ancho = new FormControl();
    this.peso = new FormControl();
    this.lugarOrigen = {
      persona: "",
      street: "",
      street2: "",
      houseNumber: "",
      city: "",
      state: "",
      postalCode: "",
      country: "",
      county: "",
      countryCode: "",
      district: "" //no se usa la colonia pero aun asi ponla para aparentar
    };

    this.lugarDestino = {
      persona: "",
      street: "",
      street2: "",
      houseNumber: "",
      city: "",
      state: "",
      postalCode: "",
      country: "",
      county: "",
      countryCode: "",
      district: "" //no se usa la colonia pero aun asi ponla para aparentar
    };
  }

  ngOnInit() {
    //este es para escuchar los cambios y asi poner generar el autocompletado

    this.busquedaDir.valueChanges.subscribe(termino => {
      if (termino != "") {
        this.nameOrig = this.nombreOrig.value;
        this.nameDest = this.nombreDest.value;
        this._direccionesService.busquedaLugares(termino).subscribe(data => {
    
          this.lugares = data.suggestions as any[];
        });
      }
    });
  }

  /* En este asignamos hacia que lado se va a ir esa madre */
  seleccionarOrigen(index) {
    console.log(this.lugares[index]);
    if (this.lugarOrigen === undefined || this.lugarOrigen === null) {
      Swal.fire("Error", "No puedes dejar el lugar de origen vacio", "error");
    } else {
      this.lugarOrigen.persona = this.nameOrig;

      this.lugarOrigen.countryCode =
        this.lugares[index].countryCode !== undefined
          ? this.lugares[index].countryCode
          : "";

      this.lugarOrigen.street =
        this.lugares[index].address.street !== undefined
          ? this.lugares[index].address.street
          : "";
      this.lugarOrigen.houseNumber =
        this.lugares[index].address.houseNumber !== undefined
          ? this.lugares[index].address.houseNumber
          : "";

      this.lugarOrigen.city =
        this.lugares[index].address.city !== undefined
          ? this.lugares[index].address.city
          : "";

      this.lugarOrigen.state =
        this.lugares[index].address.state !== undefined
          ? this.lugares[index].address.state
          : "";

      this.lugarOrigen.postalCode =
        this.lugares[index].address.postalCode !== undefined
          ? this.lugares[index].address.postalCode
          : "";

      this.lugarOrigen.country =
        this.lugares[index].address.country !== undefined
          ? this.lugares[index].address.country
          : "";

      this.lugarOrigen.county =
        this.lugares[index].address.county !== undefined
          ? this.lugares[index].address.county
          : "";

      this.lugarOrigen.countryCode =
        this.lugares[index].countryCode !== undefined
          ? this.lugares[index].countryCode
          : "";

      /* opcionales */
      this.lugarOrigen.district =
        this.lugares[index].address.district !== undefined
          ? this.lugares[index].address.district
          : "";
      /* this.lugarOrigen = this.lugares[index]; */
    }
  }

  seleccionarDestino(index) {
    this.lugarDestino.persona = this.nameDest;
    this.lugarDestino.street =
      this.lugares[index].address.street !== undefined
        ? this.lugares[index].address.street
        : "";
    this.lugarDestino.houseNumber =
      this.lugares[index].address.houseNumber !== undefined
        ? this.lugares[index].address.houseNumber
        : "";

    this.lugarDestino.city =
      this.lugares[index].address.city !== undefined
        ? this.lugares[index].address.city
        : "";

    this.lugarDestino.state =
      this.lugares[index].address.state !== undefined
        ? this.lugares[index].address.state
        : "";

    this.lugarDestino.postalCode =
      this.lugares[index].address.postalCode !== undefined
        ? this.lugares[index].address.postalCode
        : "";

    this.lugarDestino.country =
      this.lugares[index].address.country !== undefined
        ? this.lugares[index].address.country
        : "";

    this.lugarDestino.county =
      this.lugares[index].address.county !== undefined
        ? this.lugares[index].address.county
        : "";

    this.lugarDestino.countryCode =
      this.lugares[index].countryCode !== undefined
        ? this.lugares[index].countryCode
        : "";

    /* opcionales */
    this.lugarDestino.district =
      this.lugares[index].address.district !== undefined
        ? this.lugares[index].address.district
        : "";
  }

  //SE EVALUA QUE TENGA UNA DIRECCION RELATIVAMENTE COMPLETA
  evaluarDatosDireccion() {
    let ori = this.lugarOrigen; //origen de los datos buscados

    let dest = this.lugarDestino; //destino de los datos buscados

    let arrayorigen = [
      ori.persona,
      ori.street,
      ori.houseNumber,
      ori.city,
      ori.state,
      ori.postalCode,
      ori.country
    ];
    let arraydestino = [
      dest.persona,
      dest.street,
      dest.houseNumber,
      dest.city,
      dest.state,
      dest.postalCode,
      dest.country
    ];

    const resultadoorigen = arrayorigen.filter(elemento => elemento !== "");
    const resultadodestino = arraydestino.filter(elemento => elemento !== "");

    if (resultadoorigen.length === 7 && resultadodestino.length === 7) {
      this.lugarOrigen.persona = this.nameOrig;
      this.lugarDestino.persona = this.nameDest;

      this.paquete = {
        paquete_longitud: Math.round((this.largo.value / 2.54) * 10) / 10,
        paquete_anchura: Math.round((this.ancho.value / 2.54) * 10) / 10,
        paquete_altura: Math.round((this.alto.value / 2.54) * 10) / 10,
        paquete_peso: Math.round((this.peso.value / 28.35) * 10) / 10
      };

      this._direccionesService.datosParaCotizacion(
        this.lugarOrigen,
        this.lugarDestino,
        this.paquete
      );
      this._router.navigate(["/tarifas"]);
    } else {
      console.log("incompleta direccion");
    }
  }

  openDialogOrigen(): void {
    const dialogRef = this.dialog.open(DialogOrigen, {
      width: "250px",
      data: {
        persona: this.lugarOrigen.persona,
        street: this.lugarOrigen.street,
        houseNumber: this.lugarOrigen.houseNumber,
        street2: this.lugarOrigen.street2,
        city: this.lugarOrigen.city,
        district: this.lugarOrigen.district,
        postalCode: this.lugarOrigen.postalCode
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result !== undefined) {
        const {
          persona,
          street,
          houseNumber,
          street2,
          city,
          district,
          postalCode
        } = result;

        this.lugarOrigen = {
          street,
          street2,
          houseNumber,
          city,
          country: this.lugarOrigen.country,
          county: this.lugarOrigen.county,
          district,
          state: this.lugarOrigen.state,
          postalCode,
          persona: this.lugarOrigen.persona,
          countryCode: this.lugarOrigen.countryCode
        };
      }
    });
  }

  openDialogDestino(): void {
    const dialogRefe = this.dialog.open(DialogDestino, {
      width: "250px",

      data: {
        persona: this.lugarDestino.persona,
        street: this.lugarDestino.street,
        houseNumber: this.lugarDestino.houseNumber,
        street2: this.lugarDestino.street2,
        city: this.lugarDestino.city,
        district: this.lugarDestino.district,
        postalCode: this.lugarDestino.postalCode
      }
    });

    dialogRefe.afterClosed().subscribe(result => {
      console.log(result);
      if (result !== undefined) {
        const {
          persona,
          street,
          houseNumber,
          street2,
          city,
          district,
          postalCode
        } = result;

        this.lugarDestino = {
          street,
          street2,
          houseNumber,
          city,
          country: this.lugarDestino.country,
          county: this.lugarDestino.county,
          district,
          state: this.lugarDestino.state,
          postalCode,
          persona: this.lugarDestino.persona,
          countryCode: this.lugarDestino.countryCode
        };
      }
    });
  }
}

@Component({
  templateUrl: "dialogOrigen.html"
})
export class DialogOrigen {
  constructor(
    public dialogRef: MatDialogRef<DialogOrigen>,
    @Inject(MAT_DIALOG_DATA) public lugarOrigen: DireccionEnvio
  ) {}
}

@Component({
  templateUrl: "dialogDestino.html"
})
export class DialogDestino {
  constructor(
    public dialogRef: MatDialogRef<DialogDestino>,
    @Inject(MAT_DIALOG_DATA) public lugarDestino: DireccionEnvio
  ) {}
}
