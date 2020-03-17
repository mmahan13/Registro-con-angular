import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../../servicios/usuario.service';


@Component({
  selector: 'app-privado-page',
  templateUrl: './privado-page.component.html',
  styleUrls: ['./privado-page.component.css']
})
export class PrivadoPageComponent implements OnInit {
clientes: any;
  constructor(private usuarioService: UsuarioService) {
    this.obtenerClientes();
   }

  obtenerClientes(){
    this.usuarioService.getClientes().subscribe(response => {
      this.clientes = response;

    },
    error =>{
      console.log(JSON.stringify(error));
    });
  }

  ngOnInit() {
  }

  editarCli(row){
    
    console.log(row);
  }

}
