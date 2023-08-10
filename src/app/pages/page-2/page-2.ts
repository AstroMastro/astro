import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'page-2',
  templateUrl: './page-2.html',
  styleUrls: ['./page-2.css']
})
export class Page2Component implements OnInit{
  @Input() isMobile: boolean = false;

  constructor() { }

  ngOnInit() {}

  openDialog() {
    alert('Dialog opened!');
  }
}
