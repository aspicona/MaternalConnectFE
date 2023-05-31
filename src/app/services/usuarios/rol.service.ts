import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rol } from 'src/app/models/Rol';

@Injectable({
  providedIn: 'root'
})
export class RolService {
  private URL: string ="https://localhost:7128/api/Rol/getAll";

  constructor(private http : HttpClient) { }

  getRoles(): Observable<any>{
    return this.http.get<any>(this.URL)
  }
}
