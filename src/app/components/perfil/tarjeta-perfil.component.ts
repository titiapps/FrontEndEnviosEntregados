import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-tarjeta-perfil",
  templateUrl: "./tarjeta-perfil.component.html"
})
export class TarjetaPerfilComponent implements OnInit {
  @Input() usuario: any;
  constructor() {}

  ngOnInit() {
    console.log(this.usuario);
  }
}
