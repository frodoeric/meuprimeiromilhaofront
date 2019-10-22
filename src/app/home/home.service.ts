import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const URL_GERAMILHO = "http://localhost:54224/api/GeraMilho";
const URL_DEPOSITO = "http://localhost:54224/api/Deposito";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getGerarMilho(){
    return this.http.get(URL_GERAMILHO);
  }

  getDeposito(){
    return this.http.get(URL_DEPOSITO);
  }
}
