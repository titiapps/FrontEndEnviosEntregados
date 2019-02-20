import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DireccionesService } from "./services.index";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [DireccionesService]
})
export class ServicesModule {}
