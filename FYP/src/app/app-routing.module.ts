import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './Login/admin/admin.component';
import { StudentComponent } from './Login/student/student.component';
import { TeacherComponent } from './Login/teacher/teacher.component';


const routes: Routes = [
{path: " ", redirectTo: '../admin.component.', pathMatch: 'full'},
{path: "admin", component: AdminComponent},
{path: "student", component: StudentComponent},
{path: "teacher", component: TeacherComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AdminComponent, StudentComponent,TeacherComponent];