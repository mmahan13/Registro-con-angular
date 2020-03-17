import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './componentes/home-page/home-page.component';
import { RegistroPageComponent } from './componentes/registro-page/registro-page.component';
import { NavbarPageComponent } from './componentes/navbar-page/navbar-page.component';
import { LoginPageComponent } from './componentes/login-page/login-page.component';
import { PrivadoPageComponent } from './componentes/privado-page/privado-page.component';
import { NotfounPageComponent } from './componentes/notfoun-page/notfoun-page.component';

import { UsuarioService } from './servicios/usuario.service';

import { AuthGuard } from './seguridad/auth.guard';

import { Routes, RouterModule } from '@angular/router';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';



const routes: Routes = [
  {path: '', component:LoginPageComponent },
  {path: 'login', component:LoginPageComponent},
  {path: 'registro', component:RegistroPageComponent},
  {path: 'productos', component:HomePageComponent},
  {path: 'clientes', component:PrivadoPageComponent, canActivate: [AuthGuard]},
  {path: '**', component:NotfounPageComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RegistroPageComponent,
    NavbarPageComponent,
    LoginPageComponent,
    PrivadoPageComponent,
    NotfounPageComponent
  ],
  imports: [BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(routes),
      FormsModule,
      AngularFireDatabaseModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFireAuthModule],
  providers: [UsuarioService, AngularFireAuth, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
