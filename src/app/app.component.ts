import { Component } from '@angular/core';
import { CourseService } from './course.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  courses : any = [];
  jwt : any;


  constructor(private courseService: CourseService,private http: HttpClient) { }

  ngOnInit(): void {
    this.http.post("http://localhost:8082/api/v1.0/lms/signin", { 
        "usernameOrEmail": "aa@gmail.com",
        "password": "123456"
        }).subscribe((data: any) => {
      console.log(data)
      this.jwt = data.jwt;
    })

  }
  get(search: any, from: any, to: any) {
    console.log(search);
    console.log(from);
    console.log(to);

    
    this.courseService.getCoursesDuration(search,from,to,this.jwt).subscribe((data: any) => {
      console.log(data)
      this.courses = data;
    })
  }
  getAll(search: any) {
    console.log(search);
    
    this.courseService.getCoursesTechnology(search,this.jwt).subscribe((data: any) => {
      console.log(data)
      this.courses = data;
    })
  }
}