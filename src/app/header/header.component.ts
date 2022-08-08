import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { ConvertorResponseType } from '../types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() newCourseEvent = new EventEmitter<Array<number>>;

  courseArr: Array<number> = [];

  $usdCourse: number | string;

  $eurCourse: number | string;

  $uahToEur: number | string;

  $uahToUsd: number | string;

  $eurToUsd: number | string;

  $usdToEur: number | string;

  constructor(
    private http: HttpClient,
  )
  {
    this.$usdCourse = 'Loading';
    this.$eurCourse = 'Loading';
  }

  ngOnInit(): void {
    this.http
      .get<ConvertorResponseType>('https://api.exchangerate.host/convert?from=USD&to=UAH')
      .subscribe((response) => {
        this.$usdCourse = response.info.rate;

        this.courseArr.push(this.$usdCourse);
    });

    this.http
      .get<ConvertorResponseType>('https://api.exchangerate.host/convert?from=EUR&to=UAH')
      .subscribe((response) => {
        this.$eurCourse = response.info.rate;
        this.courseArr.push(this.$eurCourse);
    });

    this.http
      .get<ConvertorResponseType>('https://api.exchangerate.host/convert?from=UAH&to=EUR')
      .subscribe((response) => {
        this.$uahToEur = response.info.rate;
        this.courseArr.push(this.$uahToEur);
    });

    this.http
      .get<ConvertorResponseType>('https://api.exchangerate.host/convert?from=UAH&to=USD')
      .subscribe((response) => {
        this.$uahToUsd = response.info.rate;
        this.courseArr.push(this.$uahToUsd);
    });

    this.http
      .get<ConvertorResponseType>('https://api.exchangerate.host/convert?from=EUR&to=USD')
      .subscribe((response) => {
        this.$eurToUsd = response.info.rate;
        this.courseArr.push(this.$eurToUsd);
    });

    this.http
      .get<ConvertorResponseType>('https://api.exchangerate.host/convert?from=USD&to=EUR')
      .subscribe((response) => {
        this.$usdToEur = response.info.rate;
        this.courseArr.push(this.$usdToEur);
        this.giveCoursesToParent(this.courseArr);
    });
  }

  giveCoursesToParent(value: Array<number>) {
    this.newCourseEvent.emit(value);
  }
}
