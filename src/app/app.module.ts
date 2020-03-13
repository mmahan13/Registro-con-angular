import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
//import { FacturaComponent } from './factura/factura.component';
//import { FacturaService } from './servicio/factura.service';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './componentes/home-page/home-page.component';
import { RegistroPageComponent } from './componentes/registro-page/registro-page.component';
import { NavbarPageComponent } from './componentes/navbar-page/navbar-page.component';
import { LoginPageComponent } from './componentes/login-page/login-page.component';
import { PrivadoPageComponent } from './componentes/privado-page/privado-page.component';
import { NotfounPageComponent } from './componentes/notfoun-page/notfoun-page.component';
import { UsuarioService } from './servicio/usuario.service';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component:HomePageComponent },
  {path: 'login', component:LoginPageComponent},
  {path: 'registro', component:RegistroPageComponent},
  {path: 'privado', component:PrivadoPageComponent},
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
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes),FormsModule],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
