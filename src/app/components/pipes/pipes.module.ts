import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DescriptionPipe } from "./descriptionPipe";
import { RastreoPipe } from './rastreo.pipe';

@NgModule({
  declarations: [DescriptionPipe, RastreoPipe],
  imports: [CommonModule],
  exports: [DescriptionPipe,RastreoPipe]
})
export class PipesModule {}
