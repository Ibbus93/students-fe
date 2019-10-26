import {Injectable} from '@angular/core';
import {Beach} from '../models/Beach';

@Injectable()

export class SortService {

  constructor() {
  }

  getSortedData = (data: Array<Beach>, key: string = 'park'): Array<Beach> => {
    switch (key) {
      case 'park':
      case 'summer_crowding':
        data = data.sort((a: Beach, b: Beach) => this.booleanCriteria(a[key], b[key]));
        break;
      case 'traffic':
        data = data.sort((a: Beach, b: Beach) => this.integerCriteria(b.traffic, a.traffic));
        break;
      case 'weather':
        data = data.sort((a: Beach, b: Beach) => this.integerCriteria(a.weather.data[0].temp, b.weather.data[0].temp));
        break;
    }

    return data;
  };

  booleanCriteria = (a: boolean, b: boolean) => {
    const first = a ? 1 : 0;
    const second = b ? 1 : 0;

    return first - second;
  };

  integerCriteria = (a: number, b: number) => a - b;
}
