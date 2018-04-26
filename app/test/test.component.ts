import { Component, OnInit } from '@angular/core';
import {MlbRepoService} from '../mlb-repo.service';
//https://www.dropbox.com/sh/0sankm6febsfogp/AAB1p-aVJnoReeclPZdv6jYua/Raw%20Icons%20-%20AL?dl=0
//http://resizeimage.net/

@Component({
  selector: 'app-test',
  template: `
    <p>
    </p>
    <div *ngFor="let standing of standings">
       <img src="../assets/icon.png" alt="some text" width=16 height=16 style="float:left;">
       {{standing.Team}}. {{standing.W}} - {{standing.L}}
    </div>


  `,
  styles: []
})
export class TestComponent implements OnInit {
  public standings = [];

  constructor(private _MlbRepoService: MlbRepoService) { }

  ngOnInit() {
    this.standings = this._MlbRepoService.getStandings();
  }

}
