import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor(private http: HttpClient) { 
  }
  getCourses(token: any) {
    return this.http.get(`http://localhost:8081/api/v1.0/lms/api/v1.0/lms/courses/getall?authToken=${token}`);
  }
  getCoursesTechnology(search: any,token: any) {
    return this.http.get(`http://localhost:8081/api/v1.0/lms/api/v1.0/lms/courses/info/${search}?authToken=${token}`);
  }
  getCoursesDuration(search: any, durationFromRange: any, durationToRange: any, token: any) {
    return this.http.get(`http://localhost:8081/api/v1.0/lms/api/v1.0/lms/courses/get/${search}/${durationFromRange}/${durationToRange}?authToken=${token}`);
  }

 
}
