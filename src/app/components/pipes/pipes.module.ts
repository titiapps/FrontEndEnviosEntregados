import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DescriptionPipe } from "./descriptionPipe";
import { RastreoPipe } from './rastreo.pipe';
import { ConversionPipe } from './conversion.pipe';

@NgModule({
  declarations: [DescriptionPipe, RastreoPipe, ConversionPipe],
  imports: [CommonModule],
  exports: [DescriptionPipe, RastreoPipe, ConversionPipe]
})
export class PipesModule {}
