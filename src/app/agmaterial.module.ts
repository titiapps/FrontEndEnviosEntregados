import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import {
  MatFormFieldModule,
  MatFormFieldControl
} from "@angular/material/form-field";
import { MatInputModule } from "@angular/material";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [],
  exports: [
    MatButtonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  imports: [
    MatButtonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ]
})
export class AgmaterialModule {}
