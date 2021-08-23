import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './Login/admin/admin.component';
import { StudentComponent } from './Login/student/student.component';

// import { StudentComponent } from './login/student/student.component';
import { TeacherComponent } from './Login/teacher/teacher.component';
import { AdminDashboardComponent } from './Login/Dashboard/admin-dashboard/admin-dashboard.component';
import { StudentDashboardComponent } from './Login/Dashboard/student-dashboard/student-dashboard.component';
import { TeacherDashboardComponent } from './Login/Dashboard/teacher-dashboard/teacher-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [
    routingComponents,
    AppComponent,
    AdminComponent,
    StudentComponent,
    TeacherComponent,
    AdminDashboardComponent,
    StudentDashboardComponent,
    TeacherDashboardComponent
  ],
  imports: [
    MatRadioModule,
    MatCheckboxModule,
    MatSelectModule,
    MatButtonModule,
    FlexLayoutModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports:[
    AppComponent,
    AdminComponent,
    StudentComponent,
    TeacherComponent,
    AdminDashboardComponent,
    StudentDashboardComponent,
    TeacherDashboardComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
