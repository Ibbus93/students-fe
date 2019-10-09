import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {StudentService} from '../../../shared/services/student.service';
import {Student} from '../../../shared/models/Student';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StudentEditComponent implements OnInit {

  student: Student;

  constructor(
    private studentService: StudentService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.getStudent(this.route.snapshot.params['id']);
  }

  getStudent(id) {
    this.studentService.getStudentById(id)
      .subscribe(data => {
        this.student = data;
      });
  }

  updateStudent(id) {
    this.studentService.editStudent(this.student)
      .subscribe(res => {
        this.router.navigate(['/list-details', id]);
      }, (err) => {
        console.log(err);
      });
  }

}
