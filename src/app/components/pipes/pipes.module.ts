import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DescriptionPipe } from "./descriptionPipe";

@NgModule({
  declarations: [DescriptionPipe],
  imports: [CommonModule],
  exports: [DescriptionPipe]
})
export class PipesModule {}
