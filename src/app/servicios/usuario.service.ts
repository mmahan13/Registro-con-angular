import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { map } from 'rxjs/operators';
//import { auth } from 'firebase/app';
//import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(public auth:AngularFireAuth) { }

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
    //return this.auth.authState.map(auth =>auth);
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

}