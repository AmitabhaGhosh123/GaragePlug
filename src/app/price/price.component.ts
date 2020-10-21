import { Component, OnInit } from '@angular/core';
import { CarserviceService } from '../carservice.service';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {

  allSelectedServices = [];
  allSelectedCars = [];
  totalPrice: number;

  constructor(public carservice: CarserviceService) { }

  ngOnInit(): void {
    this.getAllSelectedServices();
  }
  getAllSelectedServices() {
    this.allSelectedServices = JSON.parse(sessionStorage.getItem("SaveSelectedServices"));
    this.allSelectedCars = JSON.parse(sessionStorage.getItem("SaveSelectedCars"));
    this.getTotalPrice();
  }
  getTotalPrice() {
    this.totalPrice = 0;
    this.allSelectedServices.forEach(element => {
      this.totalPrice = this.totalPrice + element.Price;
    })
    this.allSelectedCars.forEach(element => {
      if (element.CarName == "Sedan") {
        this.totalPrice = this.totalPrice + this.carservice.sedanPrice;
      }
      if (element.CarName == "Hyundai Creta") {
        this.totalPrice = this.totalPrice + this.carservice.hyundaiPrice;
      }
      if (element.CarName == "Suzuki") {
        this.totalPrice = this.totalPrice + this.carservice.suzukiPrice;
      }
    })
  }

}
