import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient} from '@angular/common/http';
import { LoginRequest } from 'src/app/models/loginRequest';
import { LoginCommand } from 'src/app/models/loginCommand';

const TOKEN_KEY = 'auth-token';
const TOKEN_KEY2 = 'auth-id';

@Injectable({
  providedIn: 'root'
})

export class AuthService implements OnInit{
  url="https://localhost:7128/api/Usuario/login";
  currentUserSubject!: BehaviorSubject<LoginRequest>;
  currentUser!: Observable<LoginRequest>;
  loggedIn= new BehaviorSubject<boolean>(false);

  constructor(private http:HttpClient) {
    console.log("AUTH SERVICE WORKING");  
  }

  ngOnInit(): void {
    const storedToken = localStorage.getItem(TOKEN_KEY);
    if (storedToken) {
      this.currentUserSubject = new BehaviorSubject<LoginRequest>(JSON.parse(storedToken));
      this.currentUser = this.currentUserSubject.asObservable();
    }
  }

  login(usuario: LoginCommand): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    return this.http.post(this.url, usuario,{ 'headers': headers } )    
  }

  get usuarioAutenticado(): LoginRequest {
    return this.currentUserSubject.value;
  }

  get estaAutenticado(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

   logOut(): void {
    window.sessionStorage.clear();
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(TOKEN_KEY2);
    this.loggedIn.next(false);
  }
}
