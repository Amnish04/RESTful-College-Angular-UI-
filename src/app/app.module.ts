import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './routing/app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { StudentPageComponent } from './pages/student-page/student-page.component';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { StudentsTableComponent } from './components/students/students-table/students-table.component';
import { MatTableModule } from '@angular/material/table';
import { ClickOnKeyDirective } from './directives/click-on-key.directive';
import { StudentAddEditComponent } from './components/students/student-add-edit/student-add-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    ErrorPageComponent,
    StudentPageComponent,
    CoursesPageComponent,
    StudentsTableComponent,
    ClickOnKeyDirective,
    StudentAddEditComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule,
    AppRoutingModule,
    MatIconModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
