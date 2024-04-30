import { Component } from '@angular/core';
import { Teacher } from '../../../model/Teacher';
import { TeacherService } from '../../../services/teacher.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-createteacher',
  standalone: true,
  providers: [TeacherService],
  imports: [FormsModule, HttpClientModule],
  templateUrl: './createteacher.component.html',
  styleUrl: './createteacher.component.css',
})
export class CreateteacherComponent {
  errorMessage: String = '';
  teacher: Teacher;

  constructor(private teacherService: TeacherService) {
    this.teacher = new Teacher();
  }

  createTeacher() {
    this.teacherService
      .CreateTeacher(
        this.teacher.email,
        this.teacher.firstName,
        this.teacher.lastName,
        this.teacher.dept
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
    this.teacher = new Teacher();
  }
}
