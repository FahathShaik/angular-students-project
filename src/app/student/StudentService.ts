import { student } from './student.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudetService {

  private url = 'http://localhost:8080/index/students';

  constructor(private http: HttpClient) {}

  getStudent(): Observable<student[]> {
    return this.http.get<student[]>(this.url);
  }

  deleteStudent(id: number) {
    const deleteUrl = `http://localhost:8080/index/delete/${id}`;
    console.log(id);
    return this.http.delete(deleteUrl).subscribe(() => this.getStudent());
  }
}
