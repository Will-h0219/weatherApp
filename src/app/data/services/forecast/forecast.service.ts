import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { map } from 'rxjs';
import { WeatherForecast } from '../../interfaces/weather-forecast.interface';
import { DateTime } from "luxon";

interface WeatherForecastSignal {
  loading: boolean,
  response: WeatherForecast | null
};

@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  private apiKey = 'API_KEY_HERE';
  private baseUrl = 'http://api.weatherapi.com/v1/forecast.json';
  private http = inject(HttpClient);
  
  weatherForecastSignal = signal<WeatherForecastSignal>({
    loading: false,
    response: null,
  });

  getForecast(query: string): void {
    this.weatherForecastSignal.update(value => ({
      ...value,
      loading: true,
    }));
    let headers = new HttpHeaders();
    headers = headers.append('key', this.apiKey);
    this.http.get<WeatherForecast>(this.baseUrl, {
      params: {
        q: query,
        days: 3
      },
      headers
    }).pipe(
      map((data) => {
        const transformedData = {
          ...data,
          forecast: {
            ...data.forecast,
            forecastday: data.forecast.forecastday.map((day) => {
              const weekday = DateTime.fromISO(day.date);
              return {
                ...day,
                weekday: weekday.toFormat('EEEE'),
                dayFormatted: weekday.toFormat('LLL dd'),
              }
            })
          }
        }
        return transformedData;
      })
    ).subscribe(response => this.weatherForecastSignal.set({
      loading: false,
      response
    }));
  }
}
