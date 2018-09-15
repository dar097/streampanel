import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MatSidenavModule, MatIconModule, MatButtonModule } from '@angular/material';
import { RecentSubsComponent } from './recent-subs/recent-subs.component';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecentSubsComponent,
    NotificationComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'subs', component: RecentSubsComponent },
      { path: 'notification', component: NotificationComponent },
      { path: '**', redirectTo: '/' }
    ]),
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule, 
    HttpClientModule, 
    LayoutModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
