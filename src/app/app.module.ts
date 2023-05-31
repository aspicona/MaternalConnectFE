import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstitucionComponent } from './layout/institucion/institucion.component';
import { ContactoComponent } from './layout/contacto/contacto.component';
import { LoginComponent } from './layout/login/login.component';
import { HomeComponent } from './layout/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuLateralComponent } from './sesion/menu-lateral/menu-lateral.component';
import { DashboardComponent } from './sesion/dashboard/dashboard.component';
import { PrincipalComponent } from './layout/principal/principal.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { UsuariosFormsComponent } from './sesion/usuarios-forms/usuarios-forms.component';
import { SalasFormsComponent } from './sesion/salas-forms/salas-forms.component';
import { NoticiasFormsComponent } from './sesion/noticias-forms/noticias-forms.component';
import { AlumnosFormsComponent } from './sesion/alumnos-forms/alumnos-forms.component';
import { DocentesFormsComponent } from './sesion/docentes-forms/docentes-forms.component';
import { UsuariosComponent } from './sesion/usuarios/usuarios.component';
import { SalasComponent } from './sesion/salas/salas.component';
import { AlumnosComponent } from './sesion/alumnos/alumnos.component';
import { DocentesComponent } from './sesion/docentes/docentes.component';


@NgModule({
  declarations: [
    AppComponent,
    InstitucionComponent,
    ContactoComponent,
    LoginComponent,
    HomeComponent,
    MenuLateralComponent,
    DashboardComponent,
    PrincipalComponent,
    UsuariosFormsComponent,
    SalasFormsComponent,
    NoticiasFormsComponent,
    AlumnosFormsComponent,
    DocentesFormsComponent,
    UsuariosComponent,
    SalasComponent,
    AlumnosComponent,
    DocentesComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
