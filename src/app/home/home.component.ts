import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Deposito } from './models/deposito';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = "Home";
  public deposito: Deposito;

  constructor(private homeService: HomeService) { }

  ngOnInit() {
  }

  somar(){
    this.homeService.getGerarMilho().subscribe(x => x, err => console.log(err));
    this.homeService.getDeposito().subscribe(result => this.deposito = result);
    console.log(this.deposito);
  }

}
