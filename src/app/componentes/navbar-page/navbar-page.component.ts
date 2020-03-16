import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../servicios/usuario.service';

@Component({
  selector: 'app-navbar-page',
  templateUrl: './navbar-page.component.html',
  styleUrls: ['./navbar-page.component.css']
})
export class NavbarPageComponent implements OnInit {
isLogin: boolean;
nombre: string;
email: string;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioService.getInfoCuenta().subscribe(response => {
      if(response){
        this.isLogin = true;
        this.nombre = response.displayName;
        this.email = response.email;
      }else{
        this.isLogin = false;
      }
    })
  }
  exit(){
    console.log("exit");
    this.usuarioService.logout();
  }
}
