import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-movimientos-perfil",
  templateUrl: "./movimientos-perfil.component.html",
  styleUrls: ["./movimientos-perfil.component.css"]
})
export class MovimientosPerfilComponent implements OnInit {
  @Input() movimientos: Array<any>;
  constructor() {}

  ngOnInit() {
    console.log(this.movimientos);
  }
}
