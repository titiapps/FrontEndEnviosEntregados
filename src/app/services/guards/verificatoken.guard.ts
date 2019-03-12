import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CanActivate } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class VerificatokenGuard implements CanActivate {
  constructor() {}
  canActivate(): any {
    console.log("estoy entrando al guard");
  }
}
