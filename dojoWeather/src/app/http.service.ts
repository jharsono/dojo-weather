import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }

    getWeather(zipcode){
      var request = "http://api.openweathermap.org/data/2.5/weather?zip=" + zipcode + "&appid=fd535ad1253638d1a9b8e222c138c998&units=imperial"
      console.log(request);
      return this._http.get(request);

    }
}
