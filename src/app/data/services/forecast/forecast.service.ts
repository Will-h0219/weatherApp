import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, Subject, map } from 'rxjs';
import { WeatherForecast } from '../../interfaces/weatherForecast.interface';
import { DateTime } from "luxon";

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
    }).pipe(
      map((data) => {
        data.forecast.forecastday.forEach((day) => {
          const weekday = DateTime.fromISO(day.date);
          day.weekday = weekday.toFormat('EEEE');
          day.dayFormatted = weekday.toFormat('LLL dd');
        });
        return { ...data };
      })
    );
  }
}
