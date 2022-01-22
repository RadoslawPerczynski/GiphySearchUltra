import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { SearchPageComponent } from './pages/search-page/search-page.component';

@NgModule({
  declarations: [AppComponent, SearchPageComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule, NgbModule],
  providers: [],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
