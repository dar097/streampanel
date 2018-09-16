import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as tinycolor from 'tinycolor2';
@Component({
  selector: 'app-recent-subs',
  templateUrl: './recent-subs.component.html',
  styleUrls: ['./recent-subs.component.css']
})
export class RecentSubsComponent implements OnInit {
  donations: any[] = [];

  buffer: any[] = [
    { donator: 'Joe', amount: '$50.00'},
    { donator: 'Hoixo', amount: 'NOK500.00'},
    { donator: 'Danielle Gobert', amount: '$500.00'},
    { donator: 'MASTER OF DECIET', amount: 'Member'}
  ];

  constructor() {
   }

  ngOnInit() {
    setInterval(()=>{
      if(this.buffer.length)
      {
        this.donations.unshift(this.buffer.shift());
        setTimeout(()=>{
          this.checkNames();
        },100);

        setTimeout(()=>{//refill for testing
          if(this.donations.length > 3)
            this.buffer.push(this.donations.pop());

          setTimeout(()=>{
            const color = this.getRandomColor();
            const tc = tinycolor(color);
            var stripe = '#252525';
            if(tc.isDark())
            {
              stripe = '#efefef'
              $('.money').first().css('color', '#efefef');
              $('.subbar').first().css('background-color', '#efefef');
            }
            $('.name').first().css('color', tc.toHexString());
            // $('.money').first().css('background-color', tc.toHexString());
            $('.money').first().css('background-image', 'linear-gradient(90deg, ' + tc.toHexString() + ' 0%, ' + tc.toHexString() + ' 90%, ' + stripe + ' 90%, ' + stripe + ' 95%, ' + tc.toHexString() + ' 95%, ' + tc.toHexString() + ' 100% )');
            tc.setAlpha(0.25);
            $('.name').first().css('text-shadow', '2px 2px 4px ' + tc.toHex8String() + ';');
          }, 100);

        },500);

      }
    }, 5000);
  }

  checkNames() {
    $('.namecontainer').each(function(index, element){
      console.log('checking ' + index);
      var width = $(this).css('width');
      var actualWidth = Number(width.replace('px', ''));
      console.log(width + ' - ' + actualWidth);
      if(actualWidth > 680){
        $(this).text($(this).text().substr(0, 20) + '...');        
      }

      if(!$(this).parent().hasClass('scrolling-name') && actualWidth > 400){
        $(this).parent().addClass('scrolling-name');
      }
    });    
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
