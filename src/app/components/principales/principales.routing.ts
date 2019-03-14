import { RouterModule, Routes } from "@angular/router";
import { InicialComponent } from "./inicial/inicial.component";
import { TarifasComponent } from './tarifas/tarifas.component';

const routes: Routes = [
  {
    path: "inicio",
    component: InicialComponent
  },{
    path: "tarifas",
    component: TarifasComponent
  },
  { path: "", pathMatch: "full", redirectTo: "/inicio" }
];

export const principalesRoutes = RouterModule.forChild(routes);
