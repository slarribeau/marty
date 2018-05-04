import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-date',
  template: `
    <p>
       <mat-form-field>
          <input matInput [matDatepicker]="picker" [(ngModel)]="date"  (dateChange)="updateCalcs($event)" placeholder="">
          <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
          <mat-datepicker #picker>  </mat-datepicker>
      </mat-form-field> 
    </p>
  `,
  styles: []
})
export class DateComponent implements OnInit {
  date: Date;
  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.date= new Date();
    this.date.setDate(this.date.getDate()-1);
  }

  updateCalcs(event){
    let date2: Date;
    date2 = event.value;
    let dateString = date2.getFullYear() + "-";
    dateString += date2.getMonth()+1 + "-";
    dateString += date2.getDate();
    console.log(event.value);
    console.log(date2.getFullYear());
    console.log(date2.getMonth()+1);
    console.log(date2.getDate());
    this.childEvent.emit(dateString);
  }
  
}
