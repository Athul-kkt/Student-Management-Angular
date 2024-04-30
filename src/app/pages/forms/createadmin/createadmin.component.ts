import { Component } from '@angular/core';
import { User } from '../../../model/user';
import { AdminService } from '../../../services/admin.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-createadmin',
  standalone: true,
  providers: [AdminService],
  imports: [FormsModule, HttpClientModule],
  templateUrl: './createadmin.component.html',
  styleUrl: './createadmin.component.css',
})
export class CreateadminComponent {
  errorMessage: String = '';
  user: User;
  date: String = '2024-04-21';

  constructor(private adminService: AdminService) {
    this.user = new User();
  }

  createAdmin() {
    this.adminService
      .CreateAdmin(
        this.user.userName,
        this.user.userRole,
        this.user.email,
        this.user.password
      )
      .subscribe(
        (data) => {
          console.log(data);
          // Successful login, navigate to the next page
          // this.router.navigate(['/dashboard']);
        },
        (error) => {
          // Error handling
          this.errorMessage = error.message;
        }
      );
    this.user = new User();
  }
}
