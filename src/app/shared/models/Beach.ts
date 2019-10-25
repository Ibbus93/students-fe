import {CurrentWeather} from './Meteo';

export interface Beach {
  id?: number;
  name?: string;
  city?: string;
  province?: string;
  latitude?: number;
  longitude?: number;
  orientation?: string;
  park?: boolean;
  food_service?: boolean;
  lifeguard?: boolean;
  dogs_allowed?: boolean;
  summer_crowding?: boolean;
  photo?: string;
  weatherIcon?: string;
  weather: CurrentWeather;
  traffic?: number;
}

export const Orientation = {
  North: 'Nord',
  South: 'Sud',
  West: 'Ovest',
  East: 'Est',
};
