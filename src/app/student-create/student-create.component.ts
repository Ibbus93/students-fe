import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {StudentService} from '../shared/services/student.service';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StudentCreateComponent implements OnInit {
  student = {};

  constructor(private studentService: StudentService, private router: Router) {
  }

  ngOnInit() {
  }

  saveStudent() {
    console.log(this.student);
    this.studentService.insertStudent(this.student)
      .subscribe(res => {
          console.log(res);
          const id = res['id'];
          this.router.navigate(['/students']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
