import {Component, OnInit} from '@angular/core';
import {StudentService} from '../../../shared/services/student.service';
import {Student} from '../../../shared/models/Student';

@Component({
  selector: 'app-student',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
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
