import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(public auth:AngularFireAuth, private httpClient: HttpClient) { }

  logout(){
    return this.auth.auth.signOut();
  }

  registrarUsuario(email:string, password:string){
    return new Promise((resolve,reject) => {
      this.auth.auth.createUserWithEmailAndPassword(email, password)
      .then(resultado => {
        resolve(resultado);
      }, error => {
        reject(error);
      });
    });
    
  }

  getInfoCuenta(){
    return this.auth.authState.pipe(map(auth => auth));
  }

  loginUsuario(email:string, password:string){
    return new Promise((resolve,reject) => {
      this.auth.auth.signInWithEmailAndPassword(email, password)
      .then(resultado => {
        resolve(resultado);
      }, error => {
        reject(error);
      });
    });
    
  }

  getClientes(): Observable<any>{
    return this.httpClient.get("http://127.0.0.1:8000/api/clientes");
  }

  getProductos(): Observable<any>{
    return this.httpClient.get("http://127.0.0.1:8000/api/productos");
  }

}