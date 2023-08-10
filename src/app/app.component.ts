import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

//check if is mobile every time the window is resized
export class AppComponent implements OnInit{
  isMobile = false;

  ngOnInit(): void {
    this.isMobile = this.isMobileDevice();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobile = this.isMobileDevice();
  }

  isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 1400;
  }
}
