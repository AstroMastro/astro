import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  page1 = 'assets/svg/s2.png';
  page2 = 'assets/svg/2.svg';
  page3 = 'assets/svg/3.svg';
  page4 = 'assets/svg/4.svg';
  page5 = 'assets/svg/5.svg';
  page6 = 'assets/svg/6.svg';
  page7 = 'assets/svg/7.svg';
  isMobile = false;

  ngOnInit(): void {
    this.isMobile = this.isMobileDevice();
  }

  isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }
}
