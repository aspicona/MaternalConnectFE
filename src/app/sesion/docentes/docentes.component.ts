import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docentes',
  templateUrl: './docentes.component.html',
  styleUrls: ['./docentes.component.css']
})
export class DocentesComponent implements OnInit {

  docentes : any[]=[];
  constructor() { }

  ngOnInit(): void {
  }

  editarDocente(docente : any){}

  eliminarDocente(docente: any){}
}
