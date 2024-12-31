import { Location } from "./location.interface";
import { CurrentWeather } from "./current-weather.interface";
import { Forecastday } from "./forecast-day.interface";

export interface WeatherForecast {
  location: Location;
  current:  CurrentWeather;
  forecast: Forecast;
}

export interface Forecast {
  forecastday: Forecastday[];
}

