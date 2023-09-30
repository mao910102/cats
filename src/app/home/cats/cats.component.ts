import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss'],
})
export class CatsComponent  implements OnInit {

  @Input() cat: any; // Propiedad de entrada para recibir los datos del gato

  constructor() { }

  ngOnInit() {}


  comvertImageUrl(id: string){
    return   `https://cdn2.thecatapi.com/images/${id}.jpg`; 
  }

}
