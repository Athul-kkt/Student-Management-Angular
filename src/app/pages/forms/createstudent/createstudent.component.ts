import { Component } from '@angular/core';
import { Student } from '../../../model/student';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../../../services/student.services';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-createstudent',
  standalone: true,
  providers: [StudentService],
  imports: [FormsModule, HttpClientModule],
  templateUrl: './createstudent.component.html',
  styleUrl: './createstudent.component.css',
})
export class CreatestudentComponent {
  errorMessage: String = '';
  student: Student;
  date: String = '2024-04-21';

  constructor(private studentService: StudentService) {
    this.student = new Student();
  }

  createStudent() {
    this.studentService
      .CreateStudent(
        this.student.email,
        this.student.firstName,
        this.student.lastName,
        this.student.dept,
        this.student.dob
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
    this.student = new Student();
  }
}
