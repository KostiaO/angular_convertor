import { Component, OnInit } from '@angular/core';
import { Course } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  coursesObj: Course = {
    UahToUsd: 0,
    UahToEur: 0,
    EurToUah: 0,
    UsdToUah: 0,
    EurToUsd: 0,
    UsdToEur: 0,
    UsdToUsd: 1,
    UahToUah: 1,
    EurToEur: 1
  }

  setCourseObj(arrCourse: Array<number>) {
    let index = 0;

    for (const key in this.coursesObj) {
      this.coursesObj[key] = arrCourse[index];

      index++;
    }
  }

  constructor() {}

  ngOnInit(): void {
  }

}
