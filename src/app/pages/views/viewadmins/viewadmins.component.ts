import { Component, OnInit } from '@angular/core';
import { User } from '../../../model/user';
import { AdminService } from '../../../services/admin.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-viewadmins',
  standalone: true,
  providers: [AdminService],
  imports: [FormsModule, HttpClientModule],
  templateUrl: './viewadmins.component.html',
  styleUrl: './viewadmins.component.css',
})
export class ViewadminsComponent implements OnInit {
  adminList: User[] = [];

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.getAdmins();
  }

  getAdmins(): void {
    this.adminService.GetAllAdmins().subscribe(
      (admins) => {
        this.adminList = admins;
        console.log(this.adminList);
        // Successful login, navigate to the next page
        // this.router.navigate(['/dashboard']);
      },
      (error) => {
        // Error handling
        console.log(error);
      }
    );
  }
}
