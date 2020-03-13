import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../servicio/usuario.service';
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
    this.router.navigate(['/privado'])
  }
}
