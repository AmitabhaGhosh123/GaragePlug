import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarserviceService {

  arr = [];
  sedanPrice = 500;
  hyundaiPrice = 400;
  suzukiPrice = 300;

  constructor() { }
}
