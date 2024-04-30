import { Component, OnInit } from '@angular/core';
import { Student } from '../../../model/student';
import { StudentService } from '../../../services/student.services';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-viewstudent',
  standalone: true,
  providers: [StudentService],
  imports: [FormsModule, HttpClientModule],
  templateUrl: './viewstudent.component.html',
  styleUrl: './viewstudent.component.css',
})
export class ViewstudentComponent implements OnInit {
  errorMessage: String;
  studentList: Student[] = [];

  constructor(private studentService: StudentService) {
    this.errorMessage = '';
  }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void {
    this.studentService.GetAllStudents().subscribe(
      (Students) => {
        this.studentList = Students;
        console.log(this.studentList);
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
