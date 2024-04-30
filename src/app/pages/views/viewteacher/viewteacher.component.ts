import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../../../services/teacher.service';
import { Teacher } from '../../../model/Teacher';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-viewteacher',
  standalone: true,
  providers: [TeacherService],
  imports: [FormsModule, HttpClientModule],
  templateUrl: './viewteacher.component.html',
  styleUrl: './viewteacher.component.css',
})
export class ViewteacherComponent implements OnInit {
  teachersList: Teacher[] = [];

  constructor(private teacherService: TeacherService) {}

  ngOnInit(): void {
    this.getTachers();
  }

  getTachers(): void {
    this.teacherService.GetAllTeachers().subscribe(
      (Students) => {
        this.teachersList = Students;
        console.log(this.teachersList);
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
