import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HomeComponent} from './home/home.component';


@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'beaches',
        pathMatch: 'full'
      },
      {
        path: 'students',
        loadChildren: './features/students/students.module#FeatureStudentsModule',
      },
      {
        path: 'beaches',
        loadChildren: './features/beaches/beaches.module#FeatureBeachesModule'
      },
      {
        path: '**',
        component: PageNotFoundComponent
      }
    ])
  ],
  exports: [RouterModule]
})

export class AppRouting {
}
