import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Student} from '../models/Student';
import {environment} from '../../../environments/environment';

@Injectable()

export class StudentService {
  private baseUrl = `${environment.apiUrl}/students`;

  constructor(private http: HttpClient) {
  }

  getStudents = () => {
    return this.http.get<Array<Student>>(this.baseUrl);
  };

  getStudentById = (id) => {
    return this.http.get<Student>(`${this.baseUrl}/${id}`);
  };

  insertStudent = (student: Student) => {
    return this.http.post<Student>(this.baseUrl, {name: student.name, phone: student.phone, email: student.email}); // {...student}
  };

  editStudent = (student: Student) => {
    return this.http.put(`${this.baseUrl}/${student.id}`, {...student});
  };

  deleteStudent = (id) => {
    return this.http.delete(`${this.baseUrl}/${id}`);
  };
}
