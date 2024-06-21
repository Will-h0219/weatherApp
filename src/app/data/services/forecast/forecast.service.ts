import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { WeatherForecast } from '../../interfaces/weatherForecast.interface';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  private apiKey = 'API_KEY_HERE';
  private baseUrl = 'http://api.weatherapi.com/v1/forecast.json';
  private http = inject(HttpClient);
  weatherForecast$: Subject<WeatherForecast> = new Subject();

  getForecast(query: string): Observable<WeatherForecast> {
    let headers = new HttpHeaders();
    headers = headers.append('key', this.apiKey);
    return this.http.get<WeatherForecast>(this.baseUrl, {
      params: {
        q: query,
        days: 3
      },
      headers
    });
  }
}
