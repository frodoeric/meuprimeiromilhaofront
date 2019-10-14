import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const URL_GERAMILHO = "https://localhost:44351/api/GeraMilho";
const URL_DEPOSITO = "https://localhost:44351/api/Deposito";

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
