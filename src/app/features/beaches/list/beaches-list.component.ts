import {Component, OnInit} from '@angular/core';
import {BeachService} from '../../../shared/services/beaches.service';
import {Beach} from '../../../shared/models/Beach';
import {WeatherService} from '../../../shared/services/weather.service';
import {CurrentWeather} from '../../../shared/models/Meteo';
import {TrafficService} from '../../../shared/services/traffic.service';
import {Traffic} from '../../../shared/models/Traffic';
import {Router} from '@angular/router';
import {SortService} from '../../../shared/services/sort.service';

@Component({
  selector: 'app-beaches-list',
  templateUrl: './beaches-list.component.html',
  styleUrls: ['./beaches-list.component.scss']
})
export class BeachesListComponent implements OnInit {
  beaches: Array<Beach> = [];
  newBeaches = [];

  tags: Array<String> = ['Relax', 'Avventura', 'Pedalò', 'Famiglia', 'Kayak', 'Ristorante', 'Cani ammessi'];

  radioValue = 'park';
  loaded = false;

  constructor(
    private sortService: SortService,
    private beachService: BeachService,
    private weatherService: WeatherService,
    private trafficService: TrafficService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.loadComponent();
  }

  loadComponent = () => {
    this.beachService.getBeaches()
      .subscribe((resBeaches: Array<Beach>) => {
          for (const beach of resBeaches) {
            this.getWeather(beach);
            this.getTraffic(beach);
            this.sortBeaches();
          }

          this.beaches = resBeaches;
          this.setNewBeaches();
          this.loaded = true;
        }, err => {
          console.error(err);
          this.loaded = true;
        }
      );
  };

  getWeather = (beach: Beach) => {
    this.weatherService.getCurrent(beach.city, beach.latitude, beach.longitude)
      .subscribe((weather: CurrentWeather) => {
        beach.weatherIcon = this.getWeatherIconPath(weather.data[0].weather.icon);
        beach.weather = weather;
      }, err => {
        console.error(err);
      });
  };

  getTraffic = (beach: Beach) => {
    this.trafficService.getTraffic(beach.city)
      .subscribe((traffic: Traffic) => {
        if (traffic) {
          beach.traffic = traffic.value;
        }
      }, err => {
        console.error(err);
      });
  };

  radioChange = () => {
    console.log(this.radioValue);
    this.sortBeaches();
  };

  sortBeaches = () => {
    this.beaches = this.sortService.getSortedData(this.beaches, this.radioValue);
  };

  setNewBeaches = () => {
    const cols = 2;

    for (let i = 0; i < this.beaches.length; i += cols) {
      this.newBeaches.push({items: this.beaches.slice(i, i + cols)});
    }
  };


  getWeatherIconPath = (icon: string): string => `https://www.weatherbit.io/static/img/icons/${icon}.png`;

  getTrafficClass = (value: number) => value > 80 ? 'bg-danger' : (value > 50 && value < 80 ? 'bg-warning' : 'bg-success');

  goToDetails = (id: number) => this.router.navigate([`beaches/details/${id}`]);
}
