import { Component, OnInit, Input, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-tablareporte",
  templateUrl: "./tablareporte.component.html",
  styleUrls: ["./tablareporte.component.css"]
})
export class TablareporteComponent implements OnInit {
  firstrun: boolean = true; // class variable
  @Input("movimientos") movimientos: any;
  constructor() {}

  ngOnInit() {}
  ngOnChanges(changes: SimpleChanges): void {
    if (this.firstrun) {
      this.firstrun = false;
    } else {
      if (changes.movimientos !== undefined) {
        this.movimientos = changes.movimientos.currentValue;
      }
    }
  }
}
