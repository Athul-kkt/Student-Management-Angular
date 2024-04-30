import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboards/admindashboard/dashboard.component';
import { StudentdashboardComponent } from './pages/dashboards/studentdashboard/studentdashboard.component';
import { TeacherdashboardComponent } from './pages/dashboards/teacherdashboard/teacherdashboard.component';
import { ViewstudentComponent } from './pages/views/viewstudent/viewstudent.component';
import { ViewteacherComponent } from './pages/views/viewteacher/viewteacher.component';
import { ViewadminsComponent } from './pages/views/viewadmins/viewadmins.component';
import { CreatestudentComponent } from './pages/forms/createstudent/createstudent.component';
import { CreateteacherComponent } from './pages/forms/createteacher/createteacher.component';
import { CreateadminComponent } from './pages/forms/createadmin/createadmin.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'admindashboard',
    component: DashboardComponent,
    children: [
      { path: 'viewstudents', component: ViewstudentComponent },
      { path: 'viewteachers', component: ViewteacherComponent },
      { path: 'viewadmins', component: ViewadminsComponent },
      { path: 'createstudent', component: CreatestudentComponent },
      { path: 'createteacher', component: CreateteacherComponent },
      { path: 'createadmin', component: CreateadminComponent },

      { path: '', redirectTo: 'viewstudents', pathMatch: 'full' },
    ],
  },
  { path: 'studentdashboard', component: StudentdashboardComponent },
  { path: 'teacherdashboard', component: TeacherdashboardComponent },

  // {
  //   path: '',
  //   component: LayoutComponent,
  //   children: [

  //   ],
  // },
];
