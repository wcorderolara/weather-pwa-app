import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { IWeather } from '../models/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<IWeather> {
    const options = new HttpParams()
      .set('units', 'metric')
      .set('q', city)
      .set('appid', environment.apiKey);

    return this.http.get<IWeather>(environment.apiUrl + 'weather', {params: options});
  }

}
