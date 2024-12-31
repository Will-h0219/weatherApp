export interface Widget {
  id:     string;
  icon:   string;
  label:  string;
  value:  number;
  sufix?: string;
}

export const AVAILABLE_WIDGETS: Record<string, Widget> = {
  'humidity': {
    id: 'humidity',
    icon: 'humidity_percentage',
    label: 'Humidity',
    value: 0,
    sufix: '%',
  },
  'wind_kph': {
    id: 'wind_kph',
    icon: 'air',
    label: 'Wind Speed',
    value: 0,
    sufix: 'km/h',
  },
  'pressure_mb': {
    id: 'pressure_mb',
    icon: 'swap_driving_apps_wheel',
    label: 'Pressure',
    value: 0,
    sufix: 'mb',
  },
  'uv': {
    id: 'uv',
    icon: 'wb_sunny',
    label: 'UV',
    value: 0,
  },
};
