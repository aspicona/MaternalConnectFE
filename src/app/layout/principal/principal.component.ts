import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  logueado:boolean=false;

  constructor(public authService: AuthService) { 
    localStorage.clear();
    // this.logueado=this.authService.isLogueado();
  }

  ngOnInit(): void {
   
  }
  estaAutenticado(){
    return this.authService.estaAutenticado;
  }

}
