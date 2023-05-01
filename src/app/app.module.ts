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


@NgModule({
  declarations: [
    AppComponent,
    InstitucionComponent,
    ContactoComponent,
    LoginComponent,
    HomeComponent,
    MenuLateralComponent,
    DashboardComponent,
    PrincipalComponent
    
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
