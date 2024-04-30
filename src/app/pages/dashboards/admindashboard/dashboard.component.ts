import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  constructor(private router: Router) {}

  createStudent() {
    this.router.navigateByUrl('/studentSignup');
  }

  log() {
    console.log('funtion called');
  }
  goTostudentView() {
    console.log('button click');
    this.router.navigateByUrl('/admindashboard/viewstudents');
  }
  goToteacherView() {
    console.log('button click');
    this.router.navigateByUrl('/admindashboard/viewteachers');
  }
  goToadminView() {
    console.log('button click');
    this.router.navigateByUrl('/admindashboard/viewadmins');
  }
  goToCreateStudent() {
    console.log('button click');
    this.router.navigateByUrl('/admindashboard/createstudent');
  }
  goToCreateTeacher() {
    console.log('button click');
    this.router.navigateByUrl('/admindashboard/createteacher');
  }
  goToCreateAdmin() {
    console.log('button click');
    this.router.navigateByUrl('/admindashboard/createadmin');
  }
}
