import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datecomponent',
  templateUrl: './datecomponent.component.html',
  styleUrls: ['./datecomponent.component.css']
})
export class DatecomponentComponent implements OnInit {

  constructor() { }
  todayDate=new Date()
  ngOnInit(): void {
  }

}
