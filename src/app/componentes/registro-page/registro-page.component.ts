import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../servicio/usuario.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-registro-page',
  templateUrl: './registro-page.component.html',
  styleUrls: ['./registro-page.component.css']
})
export class RegistroPageComponent implements OnInit {
  email:any;
  password:any;

  constructor() { }

  ngOnInit() {
  }

}
