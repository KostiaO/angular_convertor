import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../types';

type SelectType = 'Uah' | 'Eur' | 'Usd';

@Component({
  selector: 'app-convertation',
  templateUrl: './convertation.component.html',
  styleUrls: ['./convertation.component.css']
})


export class ConvertationComponent implements OnInit {

  @Input() coursesObj: Course;

  public arraySelect: SelectType[] = ['Uah', 'Usd', 'Eur'];

  public course1: SelectType = 'Uah';

  public course2: SelectType = 'Eur';

  public numberFromInput: number = 3;


  constructor() {
  }


  ngOnInit(): void {
  }



}
