import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService implements OnInit {
  
  usuarios: any[]=[];
  url="https://localhost:7128/api/Usuario/";

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  getAllUsuarios(): Observable<any> {
    return this.http.get<any>(this.url+"getAll")
  }
}
