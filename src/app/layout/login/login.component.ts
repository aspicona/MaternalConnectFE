import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginCommand } from 'src/app/models/loginCommand';
import { LoginRequest } from 'src/app/models/loginRequest';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
  
  loginForm: FormGroup;
  fieldTextType:boolean=false;
  usuario:LoginCommand=new LoginCommand();
  error?:string;

  constructor(private fb: FormBuilder,
              private router:Router,
              private authService:AuthService
              ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid){
    console.log(this.loginForm.value);
    }
  }

  ngOnInit(): void {
  }

  get passField() {
    return this.loginForm.get("password");
  }

  get passInvalid() {
    return this.passField?.touched && !this.passField.valid;
  }

  tomarUsuario(){
    this.usuario.Username= this.loginForm.get("username")?.value as string;
    this.usuario.Password= this.loginForm.get("password")?.value as string;
    
    this.onEnviar(this.usuario);
  }

  ocultarPass(){
    this.fieldTextType = !this.fieldTextType;
  }

  // onEnviar(usuario: LoginCommand) {
  //   if (this.loginForm.valid) {
  //     console.log(this.loginForm.value);
  
  //     this.authService.login(usuario).subscribe({
  //       next: (data) => {
  //         console.log("DATA: " + JSON.stringify(data));
          
  //         localStorage.setItem("auth-token", JSON.stringify(data.token));
  //         localStorage.setItem("auth-id", JSON.stringify(data.idUsuario));
  //         this.authService.setLogueado(true);
  //         this.authService.currentUser = data;

  //         console.log(this.authService.currentUser)
  //         this.router.navigate(["menuLateral"]);
  //       },
  //       error: (error) => {
  //         this.error = error;
  //       }
  //     });
  //   } else {
  //     this.loginForm.markAllAsTouched();
  //   }
  // }

  onEnviar(usuario: LoginCommand) {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
  
      this.authService.login(usuario).subscribe({
        next: (data) => {
          console.log("DATA: " + JSON.stringify(data));
          
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", data.idUsuario.toString());
          
          console.log(localStorage)
          this.router.navigate(["menuLateral"]);
          
        },
        error: (error) => {
          this.error = error;
        }
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
