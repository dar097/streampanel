import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  subscriber: string = '';
  @ViewChild('subbox') subbox: ElementRef;
  constructor() {
    setInterval(() => {
      this.ngOnInit();
    }, 10000);

   }

  ngOnInit() {
    setTimeout(() => {
      this.subbox.nativeElement.className += ' appear';    
      this.subscriber = 'Aquaterion';
      setTimeout(() => {
        this.subbox.nativeElement.className = this.subbox.nativeElement.className.split(' appear').join('');
        this.subbox.nativeElement.className += ' disappear';
        setTimeout(() => {
          this.subbox.nativeElement.className = this.subbox.nativeElement.className.split(' disappear').join('');
          this.subscriber = '';
        }, 1000);
      }, 5000);
    }, 2500);
  }

}
