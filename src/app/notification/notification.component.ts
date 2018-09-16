import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  subscriber: string = '';
  circleSpawner: any;
  @ViewChild('subbox') subbox: ElementRef;
  @ViewChild('lettercontainer') letterbox: ElementRef;
  subs: string[] = [
    'Aquaterion',
    'Hoixo',
    'Map520',
    'InstanityYT',
    'Wakanda',
    'Spiderman',
    'Thor',
    'Odin the All Father',
    'Loki',
    'Orange Justice',
    'The Cube',
    'Real Ninja BTW',
    'Not Instanity',
    'Spammer69',
    'Luke Mcallister',
    'Danielle Gobert',
    'New Subscriber',
    'Very Long Name For The Sake of Testing'
  ]

  constructor() {
    setInterval(() => {
      this.ngOnInit();
    }, 10000);

   }

  ngOnInit() {
    this.loadLetter(this.letterbox);

    setTimeout(() => {
      this.subbox.nativeElement.className += ' appear';    
      this.subscriber = this.subs[Math.round(Math.random() * (this.subs.length-1))];
      setTimeout(()=>{
        $('#letter').css('width', this.subbox.nativeElement.clientWidth + 'px');
        this.loadLetter(this.letterbox);

        var width = this.letterbox.nativeElement.clientWidth;
        var height = this.letterbox.nativeElement.clientHeight;
        this.circleSpawner = setInterval(() => {
          var x = 25 + (Math.random() * Math.floor(width-50));
          var y = 25 + (Math.random() * Math.floor(height-50));
          var color = this.getRandomColor();
          console.log(`Circle Spawned at [${x},${y}] colored ${color}`);
          var originX = Math.round((1-((x-25)/width))*100);
          var originY = Math.round((1-((y-25)/height))*100);

          //    transform-origin: 0% 0%;
          $('#circles').append('<div class="circles pop" style="left: ' + x + 'px; top: ' + y + 'px; background-color: ' + color + '; transform-origin: ' + originX + '% ' + originY + '%"></div>');
          /*
          var circle = $('#circles').add('div');
          circle.addClass('circles');
          circle.css('left', x + 'px');
          circle.css('top', y + 'px');
          circle.css('background-color', color + 'px'); */
        }, 50);
      }, 0);
      setTimeout(() => {
        this.subbox.nativeElement.className += ' disappear';
        $('#circles').children().addClass('disappear');
        setTimeout(() => {
          clearInterval(this.circleSpawner);
          $('#circles').empty();
          this.subbox.nativeElement.className = this.subbox.nativeElement.className.split(' appear').join('');
          this.subbox.nativeElement.className = this.subbox.nativeElement.className.split(' disappear').join('');
          this.subscriber = '';
        }, 1000);
      }, 5000);
    }, 2500);
  }

  loadLetter(element: ElementRef){
    var localWidth = element.nativeElement.clientWidth;
    var sides = (window.innerWidth - localWidth) / 2;
    $('#letter').css('left', sides + 'px');
  }

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

}
