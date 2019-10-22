import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = "Home";
  soma: number = 0;

  constructor(private homeService: HomeService) { }

  ngOnInit() {
  }

  somar(){
    this.homeService.getGerarMilho().subscribe(x => x, err => console.log(err));
    
    this.soma ++;
  }

}
