import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {StudentService} from '../shared/services/student.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StudentEditComponent implements OnInit {

  student = {};

  constructor(private studentService: StudentService, private router: Router, private route: ActivatedRoute) {
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
        const st_id = res['id'];
        this.router.navigate(['/student-details', id]);
      }, (err) => {
        console.log(err);
      });
  }

}
