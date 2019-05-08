import { Component, OnInit } from "@angular/core";
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter
} from "@angular/material-moment-adapter";
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE
} from "@angular/material/core";
import { MovimientosService } from "src/app/services/services.index";

@Component({
  selector: "app-reporte",
  templateUrl: "./reporte.component.html",
  styleUrls: ["./reporte.component.css"],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: "es-MX" },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE]
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS }
  ]
})
export class ReporteComponent implements OnInit {
  fecha: any;
  fecha2: any;
  movimientos: any;

  constructor(private _movimientoService: MovimientosService) {}

  ngOnInit() {
    /*  this._movimientosService.movimientosReporteFechas() */
  }

  exportAsXLSX(): void {
    /*  */
  }
  verFecha() {
    let fecha_inicio = this.getFecha(1);
    let fecha_fin = this.getFecha(2);

    this._movimientoService
      .movimientosReporteFechas(fecha_inicio, fecha_fin)
      .subscribe(resp => {
        console.log(resp);
        this.movimientos = resp;
      });
  }
  getFecha(tipo: Number) {
    let fecha_calculo = tipo === 1 ? this.fecha._i : this.fecha2._i;
    let { date, month, year } = fecha_calculo;

    if (tipo === 1) {
      return new Date(year, month, date);
    } else {
      return new Date(year, month, date, 23, 59, 59);
    }
  }
}
