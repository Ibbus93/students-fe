import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {StudentService} from '../shared/services/student.service';
import {Student} from '../shared/models/Student';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StudentDetailComponent implements OnInit {
  student: Student;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studentService: StudentService
  ) {
  }

  ngOnInit() {
    this.getStudentDetail(this.route.snapshot.params.id);
  }

  getStudentDetail(id) {
    this.studentService.getStudentById(id)
      .subscribe(data => {
        this.student = data;
      });
  }

  deleteStudent(id) {
    this.studentService.deleteStudent(id)
      .subscribe(data => {
        this.router.navigate(['/students']);
      }, (err) => {
        console.log(err);
      });
  }

}
