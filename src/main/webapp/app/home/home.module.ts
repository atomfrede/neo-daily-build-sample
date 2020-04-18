import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppNeo4JSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [AppNeo4JSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class AppNeo4JHomeModule {}
