import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {StudentListComponent} from './list/student-list.component';
import {StudentDetailComponent} from './detail/student-detail.component';
import {StudentCreateComponent} from './create/student-create.component';
import {StudentEditComponent} from './edit/student-edit.component';
import {StudentService} from '../../shared/services/student.service';
import {FeatureStudentsRoutingModule} from './students.routing';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    StudentListComponent,
    StudentDetailComponent,
    StudentCreateComponent,
    StudentEditComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    FeatureStudentsRoutingModule
  ],
  providers: [StudentService],
})
export class FeatureStudentsModule {
}
