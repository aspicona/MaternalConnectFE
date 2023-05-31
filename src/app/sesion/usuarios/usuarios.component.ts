import { Component, OnInit } from '@angular/core';
import { Subscription, map } from 'rxjs';
import { Rol } from 'src/app/models/Rol';
import { Usuario } from 'src/app/models/Usuario';
import { RolService } from 'src/app/services/usuarios/rol.service';
import { UsuarioService } from 'src/app/services/usuarios/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  private suscripcion = new Subscription();
  usuarios: any[]=[];
  rol: Rol = {} as Rol;

  busqueda: string = '';

  constructor( private usuarioService: UsuarioService, private rolService: RolService) { }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  ngOnInit(): void {

    this.suscripcion.add(
      this.rolService.getRoles().subscribe({
        next: (rroles) =>{
          this.usuarioService.getAllUsuarios().subscribe({
            next: (rusuarios) => {
              console.log(rusuarios);
              rusuarios.listaUsuarios.forEach((usuario : Usuario) => {
                const indice= rroles.listaRoles.findIndex((x : Rol) => x.idRol === usuario.idRol)
                  usuario.RolSeleccionado= rroles.listaRoles[indice]
                });
                this.usuarios=rusuarios.listaUsuarios;
            },
            error: ()=> alert('error al obtener los usuarios')
          })
        }, 
        error: ()=> alert('Error al obtener los roles')
      })
    )
  }

  // buscar() {
  //   if (this.busqueda) {
  //     this.usuarios = this.usuarios.filter(usuario =>
  //       usuario.Username.toLowerCase().includes(this.busqueda.toLowerCase()) ||
  //       usuario.Email.toLowerCase().includes(this.busqueda.toLowerCase()) ||
  //       usuario.RolSeleccionado?.Nombre.toLowerCase().includes(this.busqueda.toLowerCase())
  //     );
  //   } else {
  //     this.usuarioService.getAllUsuarios().subscribe(
  //       usuarios => this.usuarios = usuarios
  //     );
  //   }
  // }

  buscar() {
    if (this.busqueda) {
      this.usuarioService.getAllUsuarios().pipe(
        map(usuarios => {
          return usuarios.filter((usuario : Usuario) =>
            usuario.Username.toLowerCase().includes(this.busqueda.toLowerCase()) ||
            usuario.Email.toLowerCase().includes(this.busqueda.toLowerCase()) ||
            (usuario.RolSeleccionado && usuario.RolSeleccionado.nombre.toLowerCase().includes(this.busqueda.toLowerCase()))
          );
        })
      ).subscribe(
        usuariosFiltrados => this.usuarios = usuariosFiltrados
      );
    } else {
      this.usuarioService.getAllUsuarios().subscribe(
        usuarios => this.usuarios = usuarios
      );
    }
  }

  eliminarUsuario(usuario: any){};
  editarUsuario(usuario: any){};
}

