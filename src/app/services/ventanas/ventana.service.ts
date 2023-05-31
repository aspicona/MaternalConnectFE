import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VentanaService {

  switchUsuario:boolean=false;
  switchCalendario:boolean=false;
  switchSala:boolean=false;
  switchAlumno:boolean=false;
  switchDocente:boolean=false;
  switchNoticia:boolean=false;

  constructor() { }

  apagarSwitchs(){
    this.switchUsuario=false;
    this.switchCalendario=false;
    this.switchSala=false;
    this.switchAlumno=false;
    this.switchDocente=false;
    this.switchNoticia=false;
  }
}
