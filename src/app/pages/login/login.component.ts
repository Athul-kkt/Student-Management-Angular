import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  providers: [AuthService],
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private authService: AuthService) {}
  onLogin() {
    this.authService.login(this.email, this.password).subscribe(
      (data) => {
        console.log(data);
        if (data['userRole'] == 'Student') {
          this.router.navigate(['/studentdashboard']);
        } else if (data['userRole'] == 'Teacher') {
          this.router.navigate(['/teacherdashboard']);
        } else if (data['userRole'] == 'Admin') {
          this.router.navigate(['/admindashboard']);
        } else {
          this.errorMessage = data['message'];
        }

        // Successful login, navigate to the next page
        // this.router.navigate(['/dashboard']);
      },
      (error) => {
        // Error handling
        this.errorMessage = error.message;
      }
    );
  }
}
