import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  constructor(
    private httpClient:HttpClient, 
    
   
    ) { }

  listadoFacturas(): Observable<any>{
    return this.httpClient.get("http://127.0.0.1:8000/api/facturas");

  }
}
