import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  zipcode = 60610;
  weather: any;

  constructor(private _httpService: HttpService){ }

  ngOnInit() {
    this.getWeather();
  }

  getWeather(){ // define the function to get an observable and subscribe
    let observable = this._httpService.getWeather(this.zipcode); //getTasks is invoked from http.service
    observable.subscribe(data => {
        console.log("Got weather!", data);
        this.weather = data; //put data into tasks variable
      }); // subscribe
    }


}
