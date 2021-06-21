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
  favs = "/jsonapi/v1/favorite"
  email = "sandeep@koduri.in"
  constructor(private http: HttpClient) {
     
   }

  ngOnInit(): void {
    this.getCourses().subscribe((data: Course[]) => this.courses = data
     
      );
  }
  getCourses() {
    return this.http.get<Course[]>(this.baseUrl+this.coursesPath+"?email="+this.email);
  
  }

  toggleLike(id:number, current:boolean){
    if (current){
      console.log("deleting")
      return this.http.delete<any>(this.baseUrl+this.favs+"?email="+this.email+"&course_id="+id).subscribe((s) => {
        console.log(s);
      });
  }
  else{

    return this.http.post<any>(this.baseUrl+this.favs, {

      email:this.email,
      course_id:id
    }).subscribe((s) => {
      console.log(s);
    });
  }

  }
}
