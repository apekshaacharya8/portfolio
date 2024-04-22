import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ResumeComponent } from './component/Resume/resume.component';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([

    ])
  ],
  declarations: [
    AppComponent,
    ResumeComponent

  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
