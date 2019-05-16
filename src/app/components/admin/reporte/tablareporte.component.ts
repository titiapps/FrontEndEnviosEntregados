import { Component, OnInit, Input, SimpleChanges } from "@angular/core";
import { ExcelService } from "src/app/services/services.index";

@Component({
  selector: "app-tablareporte",
  templateUrl: "./tablareporte.component.html",
  styleUrls: ["./tablareporte.component.css"]
})
export class TablareporteComponent implements OnInit {
  firstrun: boolean = true; // class variable
  @Input("movimientos") movimientos;
  @Input("fecha_inicio") fecha_inicio;
  @Input("fecha_fin") fecha_fin;
  movimientosReporte: Array<any>;

  constructor(private _excelService: ExcelService) {
    this.movimientos = [];
    this.movimientosReporte = [];
  }

  ngOnInit() {}
  ngOnChanges(changes: SimpleChanges): void {
    if (this.firstrun) {
      this.firstrun = false;
    } else {
      if (changes.movimientos !== undefined) {
        this.movimientos = changes.movimientos.currentValue.movimientos;
        console.log(changes);

        this.movimientosReporte = [];
        this.guardarMovimientosReporte();
      }
    }
  }
  guardarMovimientosReporte() {
    this.movimientos.forEach(movimiento => {
      let {
        nombre,
        apellido_paterno,
        apellido_materno,
        email,
        telefono
      } = movimiento.usuario;
      let { fecha_movimiento } = movimiento;

      let fechamovimiento = new Date(fecha_movimiento);
      let mes = fechamovimiento.getUTCMonth() + 1;
      let dia = fechamovimiento.getUTCDate();
      let año = fechamovimiento.getUTCFullYear();
      let fecha = dia + "/" + mes + "/" + año;
      let usuario = nombre + " " + apellido_paterno + " " + apellido_materno;
      let remitente = movimiento.envio.o_origen.persona;
      let {
        paquete_altura,
        paquete_anchura,
        paquete_longitud,
        paquete_peso,
        paqueteria,
        servicio
      } = movimiento.envio;

      let { forma_pago, monto } = movimiento.pago;

      let origen: String =
        movimiento.envio.o_origen.street +
        " " +
        movimiento.envio.o_origen.houseNumber +
        "," +
        movimiento.envio.o_origen.city +
        "," +
        movimiento.envio.o_origen.state +
        "," +
        movimiento.envio.o_origen.district +
        "," +
        movimiento.envio.o_origen.postalCode;

      let destinatario = movimiento.envio.o_destino.persona;
      let destino: String =
        movimiento.envio.o_destino.street +
        " " +
        movimiento.envio.o_destino.houseNumber +
        "," +
        movimiento.envio.o_destino.city +
        "," +
        movimiento.envio.o_destino.state +
        "," +
        movimiento.envio.o_destino.district +
        "," +
        movimiento.envio.o_destino.postalCode;

      let paq_tamano: String = `${paquete_altura}*${paquete_anchura}*${paquete_longitud}cm`;
      let paquetepeso = paquete_peso + "kg";

      let paqueteria_datos: String =
        paqueteria + "," + servicio + "Guia:" + movimiento.num_guia;

      let mov = {
        usuario,
        email,
        telefono,
        fecha,
        remitente,
        origen,
        destinatario,
        destino,
        paq_tamano,
        paquetepeso,
        paqueteria_datos,
        forma_pago,
        monto
      };
      this.movimientosReporte.push(mov);
    });
    console.log(this.movimientosReporte);
  }

  generarReporte() {
    let mes_fecha1 = this.fecha_inicio.getUTCMonth() + 1;
    let dia_fecha1 = this.fecha_inicio.getUTCDate();
    let año_fecha1 = this.fecha_inicio.getUTCFullYear();
    let mes_fecha2 = this.fecha_fin.getUTCMonth() + 1;
    let dia_fecha2 = this.fecha_fin.getUTCDate();
    let año_fecha2 = this.fecha_fin.getUTCFullYear();

    let fecha1 = dia_fecha1 + "-" + mes_fecha1 + "-" + año_fecha1;
    let fecha2 = dia_fecha2 + "-" + mes_fecha2 + "-" + año_fecha2;

    this._excelService.exportAsExcelFile(
      this.movimientosReporte,
      `Entregando ${fecha1}_${fecha2}`
    );
  }
}
