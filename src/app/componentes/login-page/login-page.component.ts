import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../servicios/usuario.service';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  email:any;
  password:any;

  constructor(private usuarioService:UsuarioService, public router:Router) { 
    
  }

  ngOnInit() {
  }

  onSubmintLogin(){
    this.usuarioService.loginUsuario(this.email, this.password).then( (response) => 
    {
      console.log("logado con exito.");
      this.router.navigate(['/privado']);
    }).catch((error) =>{
      console.log("Message "+ error);
      this.router.navigate(['/login']);
    });
    
  }
}
