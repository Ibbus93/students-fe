import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';


import {AppComponent} from './app.component';
import {StudentComponent} from './student/student.component';
import {StudentDetailComponent} from './student-detail/student-detail.component';
import {StudentCreateComponent} from './student-create/student-create.component';
import {StudentEditComponent} from './student-edit/student-edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {StudentService} from './shared/services/student.service';

const appRoutes: Routes = [
    {
        path: 'students',
        component: StudentComponent,
        data: {title: 'Student List'}
    },
    {
        path: 'student-details/:id',
        component: StudentDetailComponent,
        data: {title: 'Student Details'}
    },
    {
        path: 'student-create',
        component: StudentCreateComponent,
        data: {title: 'Create a new Student'}
    },
    {
        path: 'student-edit/:id',
        component: StudentEditComponent,
        data: {title: 'Edit Student'}
    },
    {
        path: '',
        redirectTo: '/students',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent,
        data: {title: 'Page Not Found'}
    }
];

@NgModule({
    declarations: [
        AppComponent,
        StudentComponent,
        StudentDetailComponent,
        StudentCreateComponent,
        StudentEditComponent,
        PageNotFoundComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(
            appRoutes,
        )
    ],
    providers: [StudentService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
