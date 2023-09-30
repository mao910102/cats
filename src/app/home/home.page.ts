import { Component } from '@angular/core';
import { HomeServiceService } from '../services/home-service.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cats : any = []
  constructor(
    private homeServiceService : HomeServiceService
  ) {}

  ngOnInit(){
  this.getInformationCats();
  }

  getInformationCats (){
    this.homeServiceService.getCats()
    this.homeServiceService.getCats().subscribe((data) => {
      this.cats = data;
      console.log(data); 
    });
  }



}
