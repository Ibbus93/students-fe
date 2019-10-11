import {Component, OnInit} from '@angular/core';
import {BeachService} from '../../../shared/services/beaches.service';
import {Beach} from '../../../shared/models/Beach';

@Component({
  selector: 'app-beaches-list',
  templateUrl: './beaches-list.component.html',
  styleUrls: ['./beaches-list.component.css']
})
export class BeachesListComponent implements OnInit {
  beaches: Array<Beach> = [];

  constructor(
    private beachService: BeachService
  ) {
  }

  ngOnInit() {
    this.beachService.getBeaches()
      .subscribe(resBeaches => {
        this.beaches = resBeaches;
      }, err =>
        console.error(err));
  }

}
