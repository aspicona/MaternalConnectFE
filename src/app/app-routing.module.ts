import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstitucionComponent } from './layout/institucion/institucion.component';
import { ContactoComponent } from './layout/contacto/contacto.component';
import { LoginComponent } from './layout/login/login.component';
import { HomeComponent } from './layout/home/home.component';
import { DashboardComponent } from './sesion/dashboard/dashboard.component';
import { MenuLateralComponent } from './sesion/menu-lateral/menu-lateral.component';
import { PrincipalComponent } from './layout/principal/principal.component';
import { UsuariosFormsComponent } from './sesion/usuarios-forms/usuarios-forms.component';
import { UsuariosComponent } from './sesion/usuarios/usuarios.component';
import { SalasComponent } from './sesion/salas/salas.component';
import { DocentesComponent } from './sesion/docentes/docentes.component';
import { AlumnosComponent } from './sesion/alumnos/alumnos.component';
import { NoticiasFormsComponent } from './sesion/noticias-forms/noticias-forms.component';

const rutasHijas: Routes =[
  {path: 'usuariosForms', component: UsuariosFormsComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'salas', component: SalasComponent},
  {path: 'docentes', component: DocentesComponent},
  {path: 'alumnos', component: AlumnosComponent},
  {path: 'noticias', component: NoticiasFormsComponent}
];

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'home', component:HomeComponent},
  {path: 'institucion', component:InstitucionComponent},
  {path: 'contacto', component:ContactoComponent},
  {path: 'login', component:LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'menuLateral', component: MenuLateralComponent, children: rutasHijas}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
