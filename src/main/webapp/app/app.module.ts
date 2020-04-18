import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { AppNeo4JSharedModule } from 'app/shared/shared.module';
import { AppNeo4JCoreModule } from 'app/core/core.module';
import { AppNeo4JAppRoutingModule } from './app-routing.module';
import { AppNeo4JHomeModule } from './home/home.module';
import { AppNeo4JEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    AppNeo4JSharedModule,
    AppNeo4JCoreModule,
    AppNeo4JHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    AppNeo4JEntityModule,
    AppNeo4JAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent]
})
export class AppNeo4JAppModule {}
