import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salas',
  templateUrl: './salas.component.html',
  styleUrls: ['./salas.component.css']
})
export class SalasComponent implements OnInit {

  salas: any[]=[];
  constructor() { }

  ngOnInit(): void {
  }

  editarSala(sala: any){}
  eliminarSala(sala: any){}
}
