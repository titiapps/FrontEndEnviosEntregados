import { NgModule } from "@angular/core";

import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { AgmaterialModule } from "src/app/agmaterial.module";

@NgModule({
  declarations: [HeaderComponent],
  imports: [RouterModule, CommonModule, AgmaterialModule],
  exports: [HeaderComponent],
  providers: []
})
export class SharedModule {}
