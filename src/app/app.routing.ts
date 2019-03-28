import { RouterModule, Routes } from "@angular/router";
import { Pagina404Component } from "./components/shared/pagina404/pagina404.component";
import { LoginComponent } from "./components/login/login.component";
import { RegistrarComponent } from "./components/registrar/registrar.component";
import { LoginguardGuard } from "./services/services.index";
import { ConektaComponent } from "./components/pruebas/conekta/conekta.component";
import { PrincipalesComponent } from "./components/principales/principales.component";
import { StripeComponent } from "./components/pruebas/stripe/stripe.component";
import { CardValComponent } from "./components/pruebas/card-val/card-val.component";
import { HeaderComponent } from "./components/shared/header/header.component";
// COMPONENTES COMPARTIDOS

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "registrarse", component: RegistrarComponent },
  { path: "conekta", component: ConektaComponent },
  { path: "stripe", component: StripeComponent },
  { path: "card", component: CardValComponent },
  { path: "header", component: HeaderComponent },

  {
    path: "",
    component: PrincipalesComponent,
    loadChildren:
      "./components/principales/principales.module#PrincipalesModule"
  },
  { path: "**", component: Pagina404Component }
];

export const appRouting = RouterModule.forRoot(routes, { useHash: true });