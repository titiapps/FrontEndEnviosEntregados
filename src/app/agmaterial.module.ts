import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import {
  MatFormFieldModule,
  MatFormFieldControl
} from "@angular/material/form-field";
import { MatInputModule } from "@angular/material";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSnackBarModule } from "@angular/material/snack-bar";MatGridListModule
import { MatGridListModule } from '@angular/material/grid-list';


@NgModule({
  declarations: [],
  exports: [
    MatButtonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSnackBarModule,
    MatGridListModule
  ],
  imports: [
    MatButtonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSnackBarModule,
    MatGridListModule
  ]
})
export class AgmaterialModule {}
