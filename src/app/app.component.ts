import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data:string;
  data2:string;
  data3:string;

  dataLoading = true;
  data2Loading = true;
  data3Loading = true;
  constructor(private dataService:DataService) {

  }

  ngOnInit() {
    this.dataService.getData(2000).then(str => {
      this.data = str;
      this.dataLoading = false;
    })
    this.dataService.getData(4000).then(str => {
      this.data2 = str;
      this.data2Loading = false;
    })
    this.dataService.getData(6000).then(str => {
      this.data3 = str;
      this.data3Loading = false;
    })
  }

  allLoading(){
    return this.dataLoading || this.data2Loading || this.data3Loading
  }
}


