import { RouterModule, Routes } from "@angular/router";
import { Pagina404Component } from "./components/shared/pagina404/pagina404.component";
import { LoginComponent } from "./components/login/login.component";
import { RegistrarComponent } from "./components/registrar/registrar.component";
import { LoginguardGuard } from "./services/services.index";
import { ConektaComponent } from "./components/pruebas/conekta/conekta.component";
import { PrincipalesComponent } from "./components/principales/principales.component";

//COMPONENTES COMPARTIDOS

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "registrarse", component: RegistrarComponent },
  { path: "conekta", component: ConektaComponent },

  {
    path: "",
    component: PrincipalesComponent,
    loadChildren:
      "./components/principales/principales.module#PrincipalesModule"
  },
  { path: "**", component: Pagina404Component }
];

export const appRouting = RouterModule.forRoot(routes, { useHash: true });
