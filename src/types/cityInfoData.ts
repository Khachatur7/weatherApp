export interface ICondition {
  code?: number;
  icon?: string;
  text: string;
}

export interface ICurrent {
  condition: ICondition;
  humidity: number;
  feelslike_c: number;
  temp_c: number;
  vis_km: number;
  pressure_mb: number;
  wind_dir: string;
  wind_kph: number;
}

export interface ILocation {
  name: string;
  region: string;
  country: string;
}

export interface IWeatherCityInfo {
  current: ICurrent | null;
  location: ILocation | null;
}
