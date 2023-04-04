import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { student } from '../student/student.model';

@Component({
  selector: 'app-studentform',
  templateUrl: './studentform.component.html',
  styleUrls: ['./studentform.component.css']
})
export class StudentformComponent {

  student1 : student = new student();
  constructor(private http:HttpClient){}

  submitForm(stud : student){
    console.log(stud)
    this.http.post(`http://localhost:8080/index/add`, stud).subscribe(res => console.log(res))
  }
  // onSubmit() {
  //   // const studentData = this.studentForm.value;
  //   this.http.post('http://localhost:8080/index/add', studentData).subscribe(response => {
  //     console.log(response);
  //   });
  // }
}
