import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import {CommonModule} from '@angular/common';
import {FeatureBeachesRoutingModule} from './beaches.routing';
import {BeachesListComponent} from './list/beaches-list.component';
import {BeachEditComponent} from './edit/beach-edit.component';
import {BeachDetailComponent} from './detail/beach-detail.component';
import {BeachCreateComponent} from './create/beach-create.component';
import {BeachService} from '../../shared/services/beaches.service';
import {CoreModule} from '../../core/core.module';

@NgModule({
  declarations: [
    BeachesListComponent,
    BeachEditComponent,
    BeachDetailComponent,
    BeachCreateComponent
  ],
  imports: [
    CoreModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FeatureBeachesRoutingModule
  ],
  providers: [
    BeachService
  ],
})
export class FeatureBeachesModule {
}
