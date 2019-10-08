import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {StudentService} from '../shared/services/student.service';
import {Student} from '../shared/models/Student';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StudentCreateComponent implements OnInit {
  student: Student;

  constructor(
    private studentService: StudentService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  saveStudent() {
    this.studentService.insertStudent(this.student)
      .subscribe(res => {
          this.router.navigate(['/students']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
