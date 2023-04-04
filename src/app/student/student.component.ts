import { StudetService } from './StudentService';
import { student } from './student.model';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  student: student = new student();
  allStudents?: student[];

  constructor(
    private studentser: StudetService,
    // private formBuilder: FormBuilder
  ) {}

  fetchData() {
    this.studentser.getStudent().subscribe((data: student[]) => {
      this.allStudents = data;
    });
    console.log(this.allStudents);
  }

  ngOnInit(): void {
    this.fetchData();
  }

  deleteStudent(id: any) {
    this.studentser.deleteStudent(id);
    this.studentser.getStudent().subscribe((data: student[]) => {
      this.allStudents = data;
    });
  }
  // onSubmit(formData: any) {
  //   this.studentser.submitForm(formData).subscribe(
  //     (response) => {
  //       console.log('Form submitted successfully!');
  //     },
  //     (error) => {
  //       console.log('Error submitting form:', error);
  //     }
  //   );
  // }
}
