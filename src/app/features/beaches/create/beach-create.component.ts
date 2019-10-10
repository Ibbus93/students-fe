import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-beach-create',
  templateUrl: './beach-create.component.html',
  styleUrls: ['./beach-create.component.css']
})
export class BeachCreateComponent implements OnInit {

  beachForm: FormGroup;
  pathPreview = '';

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.beachForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.minLength(5), Validators.maxLength(30), Validators.required])],
      province: ['', Validators.compose([Validators.required, Validators.maxLength(2)])],
      latitude: [null, Validators.required],
      longitude: [null, Validators.required],
      orientation: ['North', Validators.required],
      park: [false, Validators.required],
      food_service: [false, Validators.required],
      lifeguard: [false, Validators.required],
      dogs_allowed: [false, Validators.required],
      summer_crowding: [false, Validators.required],
      photo: ['', Validators.required]
    });
  }

  insertBeach = () => {
    console.log(this.beachForm.value);
  };

  previewPhoto = (path) => {
    this.pathPreview = path;
  };

  ngOnInit() {
  }

}
