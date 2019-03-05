import { RouterModule, Routes } from "@angular/router";
import { InicioComponent } from "./components/inicio/inicio.component";
import { Pagina404Component } from "./components/shared/pagina404/pagina404.component";
import { LoginComponent } from "./components/login/login.component";
import { RegistrarComponent } from "./components/registrar/registrar.component";

//COMPONENTES COMPARTIDOS

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegistrarComponent },
  { path: "", component: InicioComponent },
  { path: "**", component: Pagina404Component }
];

export const appRouting = RouterModule.forRoot(routes, { useHash: true });
