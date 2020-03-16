import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../servicios/usuario.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-registro-page',
  templateUrl: './registro-page.component.html',
  styleUrls: ['./registro-page.component.css']
})
export class RegistroPageComponent implements OnInit {
  email:any;
  password:any;

  constructor(private usuarioService: UsuarioService, public router: Router) { }

  ngOnInit() {
  }

  onSubmintLogin(){

      this.usuarioService.registrarUsuario(this.email, this.password).then( (response) => 
      {
        console.log("Registrado con exito.");
        this.router.navigate(['/privado']);
      });
    
  }
}
