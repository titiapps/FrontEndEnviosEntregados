import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InicialComponent } from "../principales/inicial/inicial.component";
import { principalesRoutes } from "./principales.routing";
@NgModule({
  declarations: [InicialComponent],
  exports: [InicialComponent],
  imports: [CommonModule, principalesRoutes]
})
export class PrincipalesModule {}
