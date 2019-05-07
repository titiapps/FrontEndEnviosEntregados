import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {
  UsuarioService,
  MovimientosService
} from "src/app/services/services.index";


@Component({
  selector: "app-perfil",
  templateUrl: "./perfil.component.html",
  styleUrls: ["./perfil.component.css"]
})
export class PerfilComponent implements OnInit {
  private id_perfil: String;
  usuarioPerfil: any;
  movimientos: Array<any>;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _usuarioService: UsuarioService,
    private _movimientosServices: MovimientosService
  ) {
    this._activatedRoute.params.subscribe(
      perfil => (this.id_perfil = perfil.id)
    );
  }

  ngOnInit() {
    this._usuarioService.getUsuario(this.id_perfil).subscribe(resp_usuario => {
      this.usuarioPerfil = resp_usuario;
      /*  console.log(this.usuarioPerfil); */

      this.usuarioMovimientos();
    });
  }
  usuarioMovimientos() {
    this._movimientosServices
      .regresarMovimientosUsuario(this.id_perfil)
      .subscribe((movimientos: Array<any>) => (this.movimientos = movimientos));
  }
}
