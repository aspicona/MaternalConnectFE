import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuarios-forms',
  templateUrl: './usuarios-forms.component.html',
  styleUrls: ['./usuarios-forms.component.css']
})
export class UsuariosFormsComponent implements OnInit {

  userForm: FormGroup;
  roles: any[] = [
    {id: 1, nombre: 'Rol 1'},
    {id: 2, nombre: 'Rol 2'},
    {id: 3, nombre: 'Rol 3'}
  ];

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      nombreUsuario: ['', Validators.required],
      clave: ['', Validators.required],
      email: ['', Validators.required],
      idRol: ['', Validators.required],
      fechaCreacion: ['', Validators.required]
    });
   }

  ngOnInit() {
    
  }

  onSubmit() {
    console.log(this.userForm.value);
  }

}
