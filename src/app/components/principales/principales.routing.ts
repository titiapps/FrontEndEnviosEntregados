import { RouterModule, Routes } from "@angular/router";
import { InicialComponent } from "./inicial/inicial.component";
import { TarifasComponent } from "./tarifas/tarifas.component";
import { PagoComponent } from "./pago/pago.component";
import { LoginguardGuard } from "src/app/services/services.index";
import { VerificatokenGuard } from "src/app/services/guards/verificatoken.guard";

const routes: Routes = [
  {
    path: "inicio",
    component: InicialComponent
  },
  {
    path: "tarifas",
    component: TarifasComponent
  },
  {
    path: "pago",
    canActivate: [LoginguardGuard, VerificatokenGuard],
    component: PagoComponent
  },

  { path: "", pathMatch: "full", redirectTo: "/inicio" }
];

export const principalesRoutes = RouterModule.forChild(routes);
