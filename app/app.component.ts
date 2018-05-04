import { Component } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  date2 : Date;
  message = "scott";
  //public message = new Date();



  divisions = [
    {"menu":"AL-East", "league":"AL", "division":"EAST"},
    {"menu":"AL-Central", "league":"AL", "division":"CENT"},
    {"menu":"AL-West", "league":"AL", "division":"WEST"},
  ];
  onSelect(division)  {
    console.log(division.menu)
    console.log(this.message)
    let date2: Date = new Date();
    date2.setDate(date2.getDate()-1);
    let dateString = date2.getFullYear() + "-";
    dateString += date2.getMonth()+1 + "-";
    dateString += date2.getDate();

    this.router.navigate(["/subscriptions",division.menu,this.message])
  }

  constructor(private router: Router) {
    this.date2 = new Date();
    this.date2.setDate(this.date2.getDate()-1);
    this.message = this.date2.getFullYear() + "-";
    this.message += this.date2.getMonth()+1 + "-";
    this.message += this.date2.getDate();
  }
}
