import {Component, OnInit} from '@angular/core';
import {StudentService} from '../shared/services/student.service';
import {Student} from '../shared/models/Student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students: Array<Student>;

  constructor(
    private studentService: StudentService
  ) {
  }

  ngOnInit() {
    this.studentService.getStudents()
      .subscribe((data: Array<Student>) => {
        this.students = data;
      });
  }

}
