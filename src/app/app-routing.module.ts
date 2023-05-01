import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstitucionComponent } from './layout/institucion/institucion.component';
import { ContactoComponent } from './layout/contacto/contacto.component';
import { LoginComponent } from './layout/login/login.component';
import { HomeComponent } from './layout/home/home.component';
import { DashboardComponent } from './sesion/dashboard/dashboard.component';
import { MenuLateralComponent } from './sesion/menu-lateral/menu-lateral.component';
import { PrincipalComponent } from './layout/principal/principal.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'home', component:HomeComponent},
  {path: 'institucion', component:InstitucionComponent},
  {path: 'contacto', component:ContactoComponent},
  {path: 'login', component:LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'menuLateral', component: MenuLateralComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
