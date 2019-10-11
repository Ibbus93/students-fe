export interface Beach {
  id?: number;
  name?: string;
  province?: string;
  latitude?: number;
  longitude?: number;
  orientation?: string;
  park?: string;
  food_service?: boolean;
  lifeguard?: boolean;
  dogs_allowed?: boolean;
  summer_crowding?: boolean;
  photo?: string;
}

export const Orientation = {
  North: 'Nord',
  South: 'Sud',
  West: 'Ovest',
  East: 'Est',
};
