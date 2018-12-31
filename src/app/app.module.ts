import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//ng-bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { SafePipe } from './utility/safe.pipe';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoListComponent,
    VideoDetailComponent,
    SafePipe,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
