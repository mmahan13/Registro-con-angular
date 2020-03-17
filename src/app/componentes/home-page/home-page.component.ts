import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../../servicios/usuario.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
productos:any;
  constructor(private usuarioService: UsuarioService) {
    this.obtenerProductos();
   }

  ngOnInit() {
  }

  obtenerProductos(){
    this.usuarioService.getProductos().subscribe(response =>{
      console.log(response);
      this.productos = response;
    },error =>{
      console.log(JSON.stringify(error));
    })
  }

}
