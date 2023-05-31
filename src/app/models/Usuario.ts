import { Rol } from "./Rol";

export class Usuario{
    Username:string="";
    Password:string="";
    Email: string="";
    idRol: number= 0;
    RolSeleccionado? : Rol;
    FechaCreacion: Date= {} as Date;
  }