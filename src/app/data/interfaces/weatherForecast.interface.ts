import { Location } from "./location.interface";
import { CurrentWeather } from "./currentWeather.interface";
import { Forecastday } from "./forecastDay.interface";

export interface WeatherForecast {
  location: Location;
  current:  CurrentWeather;
  forecast: Forecast;
}

export interface Forecast {
  forecastday: Forecastday[];
}

