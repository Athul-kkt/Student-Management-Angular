# StudentManagement

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
package com.example.attendancemanagement.service;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import java.util.ArrayList;
import java.util.List;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@SpringBootTest
public class TeacherServiceTest {

    @InjectMocks
    private TeacherService teacherService;

    @Mock
    private TeacherRepository teacherRepository;

    @Mock
    private UserService userService;

    @Test
    public void testGetAllTeachers() {
        // Mocking teacherRepository behavior
        List<Teacher> mockTeachers = new ArrayList<>();
        when(teacherRepository.findAll()).thenReturn(mockTeachers);

        // Calling the method under test
        List<Teacher> result = teacherService.getAllTeachers();

        // Assertions
        assertEquals(mockTeachers, result);
    }

    @Test
    public void testAddTeacher_Success() {
        // Prepare data
        Teacher teacher = new Teacher();
        teacher.setFirstName("John");
        teacher.setLastName("Doe");
        teacher.setEmail("john@example.com");

        // Mocking userService behavior
        when(userService.addUser(anyString(), anyString(), anyString(), anyString())).thenReturn(true);

        // Calling the method under test
        boolean result = teacherService.addTeacher(teacher);

        // Assertions
        assertTrue(result);
        verify(userService, times(1)).addUser("john.doe", "john@example.com", "John@123", "Teacher");
        verify(teacherRepository, times(1)).save(teacher);
    }

    @Test
    public void testAddTeacher_Failure() {
        // Prepare data
        Teacher teacher = new Teacher();
        teacher.setFirstName("John");
        teacher.setLastName("Doe");
        teacher.setEmail("john@example.com");

        // Mocking userService behavior to simulate failure
        when(userService.addUser(anyString(), anyString(), anyString(), anyString())).thenReturn(false);

        // Calling the method under test
        boolean result = teacherService.addTeacher(teacher);

        // Assertions
        assertFalse(result);
        verify(teacherRepository, never()).save(teacher);
    }
}






























package com.example.attendancemanagement.service;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@SpringBootTest
public class StudentServiceTest {

    @InjectMocks
    private StudentService studentService;

    @Mock
    private StudentRepository studentRepository;

    @Mock
    private UserService userService;

    @Test
    public void testGetStudentById_Exists() {
        // Prepare data
        long studentId = 1L;
        Student mockStudent = new Student();
        when(studentRepository.findById(studentId)).thenReturn(Optional.of(mockStudent));

        // Calling the method under test
        Student result = studentService.getStudentById(studentId);

        // Assertions
        assertEquals(mockStudent, result);
    }

    @Test
    public void testGetStudentById_NotExists() {
        // Prepare data
        long studentId = 1L;
        when(studentRepository.findById(studentId)).thenReturn(Optional.empty());

        // Calling the method under test
        Student result = studentService.getStudentById(studentId);

        // Assertions
        assertNull(result);
    }

    @Test
    public void testGetAllStudents() {
        // Mocking studentRepository behavior
        List<Student> mockStudents = new ArrayList<>();
        when(studentRepository.findAll()).thenReturn(mockStudents);

        // Calling the method under test
        List<Student> result = studentService.getAllStudents();

        // Assertions
        assertEquals(mockStudents, result);
    }

    @Test
    public void testAddStudent_Success() {
        // Prepare data
        Student student = new Student();
        student.setFirstName("John");
        student.setLastName("Doe");
        student.setEmail("john@example.com");

        // Mocking userService behavior
        when(userService.addUser(anyString(), anyString(), anyString(), anyString())).thenReturn(true);

        // Calling the method under test
        boolean result = studentService.addStudent(student);

        // Assertions
        assertTrue(result);
        verify(userService, times(1)).addUser("john.doe", "john@example.com", "John@123", "Student");
        verify(studentRepository, times(1)).save(student);
    }

    @Test
    public void testAddStudent_Failure() {
        // Prepare data
        Student student = new Student();
        student.setFirstName("John");
        student.setLastName("Doe");
        student.setEmail("john@example.com");

        // Mocking userService behavior to simulate failure
        when(userService.addUser(anyString(), anyString(), anyString(), anyString())).thenReturn(false);

        // Calling the method under test
        boolean result = studentService.addStudent(student);

        // Assertions
        assertFalse(result);
        verify(studentRepository, never()).save(student);
    }

    @Test
    public void testGetStudentByEmail_Exists() {
        // Prepare data
        String email = "john@example.com";
        Student mockStudent = new Student();
        when(studentRepository.findByEmail(email)).thenReturn(mockStudent);

        // Calling the method under test
        Student result = studentService.getStudentByEmail(email);

        // Assertions
        assertEquals(mockStudent, result);
    }

    @Test
    public void testGetStudentByEmail_NotExists() {
        // Prepare data
        String email = "john@example.com";
        when(studentRepository.findByEmail(email)).thenReturn(null);

        // Calling the method under test
        Student result = studentService.getStudentByEmail(email);

        // Assertions
        assertNull(result);
    }
}















package com.example.attendancemanagement.service;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@SpringBootTest
public class AttendanceServiceTest {

    @InjectMocks
    private AttendanceService attendanceService;

    @Mock
    private AttendanceRepository attendanceRepository;

    @Mock
    private StudentService studentService;

    @Test
    public void testMarkAttendance_Success() {
        // Prepare data
        long studentId = 1L;
        LocalDate date = LocalDate.now();
        boolean present = true;
        Student mockStudent = new Student();
        when(studentService.getStudentById(studentId)).thenReturn(mockStudent);

        // Calling the method under test
        attendanceService.markAttendance(studentId, date, present);

        // Verify interactions
        verify(attendanceRepository, times(1)).save(any(Attendance.class));
    }

    @Test
    public void testMarkAttendance_Exception() {
        // Prepare data
        long studentId = 1L;
        LocalDate date = LocalDate.now();
        boolean present = true;
        when(studentService.getStudentById(studentId)).thenThrow(new RuntimeException("Student not found"));

        // Calling the method under test
        assertThrows(RuntimeException.class, () -> {
            attendanceService.markAttendance(studentId, date, present);
        });

        // Verify interactions
        verify(attendanceRepository, never()).save(any(Attendance.class));
    }

    @Test
    public void testGetStudentAttendance() {
        // Prepare data
        long studentId = 1L;
        List<Attendance> mockAttendanceList = new ArrayList<>();
        when(attendanceRepository.findByStudentId(studentId)).thenReturn(mockAttendanceList);

        // Calling the method under test
        List<Attendance> result = attendanceService.getStudentAttendance(studentId);

        // Assertions
        assertEquals(mockAttendanceList, result);
    }

    @Test
    public void testCalculateAttendancePercentage() {
        // Prepare data
        long studentId = 1L;
        List<Attendance> mockAttendanceList = new ArrayList<>();
        mockAttendanceList.add(new Attendance(true));
        mockAttendanceList.add(new Attendance(false));
        when(attendanceRepository.findByStudentId(studentId)).thenReturn(mockAttendanceList);

        // Calling the method under test
        double result = attendanceService.calculateAttendancePercentage(studentId);

        // Assertions
        assertEquals(50.0, result);
    }
}










