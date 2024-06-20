import { Condition } from "./condition.interface";
import { CurrentWeather } from "./currentWeather.interface";

export interface Forecastday {
  date:       Date;
  date_epoch: number;
  day:        Day;
  astro:      Astro;
  hour:       CurrentWeather[];
}

export interface Astro {
  sunrise:           string;
  sunset:            string;
  moonrise:          string;
  moonset:           string;
  moon_phase:        string;
  moon_illumination: number;
  is_moon_up:        number;
  is_sun_up:         number;
}

export interface Day {
  maxtemp_c:            number;
  maxtemp_f:            number;
  mintemp_c:            number;
  mintemp_f:            number;
  avgtemp_c:            number;
  avgtemp_f:            number;
  maxwind_mph:          number;
  maxwind_kph:          number;
  totalprecip_mm:       number;
  totalprecip_in:       number;
  totalsnow_cm:         number;
  avgvis_km:            number;
  avgvis_miles:         number;
  avghumidity:          number;
  daily_will_it_rain:   number;
  daily_chance_of_rain: number;
  daily_will_it_snow:   number;
  daily_chance_of_snow: number;
  condition:            Condition;
  uv:                   number;
}
