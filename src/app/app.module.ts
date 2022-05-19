import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ROUTES } from './app-routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'

// some Modules for the UI:
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from'@angular/material/card'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatInputModule } from '@angular/material/input'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    HttpClientModule,
    // some UI module:
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatInputModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
