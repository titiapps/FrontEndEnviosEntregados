import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InicialComponent } from "../principales/inicial/inicial.component";
import { principalesRoutes } from "./principales.routing";
import { BusquedadireccionComponent } from './inicial/busquedadireccion/busquedadireccion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmaterialModule } from 'src/app/agmaterial.module';

@NgModule({
  declarations: [InicialComponent, BusquedadireccionComponent],
  exports: [InicialComponent],
  imports: [CommonModule, principalesRoutes, FormsModule,ReactiveFormsModule,AgmaterialModule]
})
export class PrincipalesModule {}
