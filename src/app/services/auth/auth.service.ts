import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpClient} from '@angular/common/http';
import { LoginRequest } from 'src/app/models/loginRequest';
import { LoginCommand } from 'src/app/models/loginCommand';


@Injectable({
  providedIn: 'root'
})

export class AuthService implements OnInit{
  private readonly TOKEN_KEY = 'token';
  private readonly USER_KEY = 'user';
  

  url="https://localhost:7128/api/Usuario/login";
  
  constructor(private http:HttpClient) {
    localStorage.clear();
    console.log("AUTH SERVICE WORKING");
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY); 
  }

  ngOnInit(): void {
    
  
  }

  login(usuario: LoginCommand): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    return this.http.post<any>(this.url, usuario, { headers: headers }).pipe(
      tap(data => {
        localStorage.setItem(this.TOKEN_KEY, data.token);
        localStorage.setItem(this.USER_KEY, JSON.stringify(data));
      })
    );
  }

  get usuarioAutenticado(): any {
    const user = localStorage.getItem(this.USER_KEY);
    return user ? JSON.parse(user) : null;
  }

  estaAutenticado(): boolean {
    const token = localStorage.getItem(this.TOKEN_KEY);
    return !!token; // Devuelve true si el token existe, de lo contrario devuelve false
  }

  logOut(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
  }

  // isLogueado(): boolean {
  //   return this.estaAutenticado;
  // }

}
