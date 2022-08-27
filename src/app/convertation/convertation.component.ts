import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../types';

type SelectType = 'Uah' | 'Eur' | 'Usd';

@Component({
  selector: 'app-convertation',
  templateUrl: './convertation.component.html',
  styleUrls: ['./convertation.component.css']
})


export class ConvertationComponent implements OnInit {

  @Input() coursesObj: Course;

  public arraySelect1: SelectType[] = ['Uah', 'Usd', 'Eur'];

  public arraySelect2: SelectType[] = ['Uah', 'Usd', 'Eur'];

  public copyOfSelections: SelectType[];

  public course1: SelectType = 'Uah';

  public course2: SelectType = 'Eur';

  public numberFromInput: number = 3;


  constructor() {
  }

  deleteProp(value: string, first: boolean): void {
    if (first) {
      this.arraySelect2 = this.copyOfSelections.filter(el => el !== value);
    } else {
      this.arraySelect1 = this.copyOfSelections.filter(el => el !== value);
    }
  }


  ngOnInit(): void {
    this.copyOfSelections = [ ...this.arraySelect1 ];
  }



}
