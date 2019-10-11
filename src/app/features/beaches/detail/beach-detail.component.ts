import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BeachService} from '../../../shared/services/beaches.service';
import {Beach} from '../../../shared/models/Beach';

@Component({
  selector: 'app-beach-detail',
  templateUrl: './beach-detail.component.html',
  styleUrls: ['./beach-detail.component.css'],
})
export class BeachDetailComponent implements OnInit {
  beach: Beach;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private beachService: BeachService
  ) {
  }

  ngOnInit() {
    this.getBeachDetail(this.route.snapshot.params.id);
  }

  getBeachDetail(id) {
    this.beachService.getBeachById(id)
      .subscribe(data => {
        this.beach = data;
      });
  }

  deleteStudent(id) {
    this.beachService.deleteBeach(id)
      .subscribe(data => {
        this.router.navigate(['/beaches']);
      }, (err) => {
        console.log(err);
      });
  }

}
