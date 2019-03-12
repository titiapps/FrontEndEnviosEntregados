import { RouterModule, Routes } from "@angular/router";
import { InicialComponent } from "./inicial/inicial.component";

const routes: Routes = [
  {
    path: "inicio",
    component: InicialComponent
  },
  { path: "", pathMatch: "full", redirectTo: "/inicio" }
];

export const principalesRoutes = RouterModule.forChild(routes);
