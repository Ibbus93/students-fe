import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import {CommonModule} from '@angular/common';
import {FeatureBeachesRoutingModule} from './beaches.routing';
import {BeachesListComponent} from './list/beaches-list.component';
import {BeachEditComponent} from './edit/beach-edit.component';
import {BeachDetailComponent} from './detail/beach-detail.component';
import {BeachCreateComponent} from './create/beach-create.component';

@NgModule({
  declarations: [
    BeachesListComponent,
    BeachEditComponent,
    BeachDetailComponent,
    BeachCreateComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    FeatureBeachesRoutingModule
  ],
  providers: [],
})
export class FeatureBeachesModule {
}
