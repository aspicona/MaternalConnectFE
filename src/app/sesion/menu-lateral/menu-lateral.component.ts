import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { VentanaService } from 'src/app/services/ventanas/ventana.service';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {

  constructor(public servicioVentanas : VentanaService, public authService: AuthService) { }

  usuarioLogueado: string="";
  ngOnInit(): void {
    this.usuarioLogueado=this.authService.usuarioAutenticado.Username;
    console.log(this.usuarioLogueado);
  }

  
}
