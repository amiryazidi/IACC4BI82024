import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  priceMax!:number
  color!:string
  title: string = "welcome"


  products = [
    { id: 1, title: "iphone 14", price: 1500, quantity: 5, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6ZyqVPUHYxe0hNpA3YJUQCak4KTARe9waWh8Boo78zDf0K7rCgvFgi5wPNk06LCRm2O4&usqp=CAU" },
    { id: 2, title: "iphone 15", price: 2000, quantity: 3, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6ZyqVPUHYxe0hNpA3YJUQCak4KTARe9waWh8Boo78zDf0K7rCgvFgi5wPNk06LCRm2O4&usqp=CAU" },
    { id: 3, title: "iphone 16", price: 3000, quantity: 2, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6ZyqVPUHYxe0hNpA3YJUQCak4KTARe9waWh8Boo78zDf0K7rCgvFgi5wPNk06LCRm2O4&usqp=CAU" },

  ]

  show(){
      alert('hello')
  }

  buy(p : any){
    p.quantity--
  }
}
