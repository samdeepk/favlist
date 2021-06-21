import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Course {
  title: string;
  instructor_name: string;
  instructor_image_url: string;
  favorite: boolean;
  id: number;
}



@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [
  ];
  baseUrl = "https://mc-dev-5.herokuapp.com"
  coursesPath = "/jsonapi/v1/courses"
  email = "sandeep@koduri.in"
  constructor(private http: HttpClient) {
     
   }

  ngOnInit(): void {
    this.getCourses().subscribe((data: Course[]) => this.courses = data
     
      );
    //
  }
  getCourses() {
    return this.http.get<Course[]>(this.baseUrl+this.coursesPath+"?email="+this.email);
  }

  // toggleLike(course){
  //   course
  //   return this.http.get<Course[]>(this.baseUrl+this.coursesPath+"?email="+this.email);

  // }

  get example() {return JSON.stringify(this.courses)};


}
