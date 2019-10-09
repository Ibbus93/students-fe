import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {StudentListComponent} from './list/student-list.component';
import {StudentDetailComponent} from './detail/student-detail.component';
import {StudentCreateComponent} from './create/student-create.component';
import {StudentEditComponent} from './edit/student-edit.component';
import {PageNotFoundComponent} from '../../page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: StudentListComponent,
  },
  {
    path: 'details/:id',
    component: StudentDetailComponent,
  },
  {
    path: 'create',
    component: StudentCreateComponent,
  },
  {
    path: 'edit/:id',
    component: StudentEditComponent,
  },
];


@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})

export class FeatureStudentsRoutingModule {
}
