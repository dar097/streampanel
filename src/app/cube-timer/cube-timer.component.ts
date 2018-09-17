import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-cube-timer',
  templateUrl: './cube-timer.component.html',
  styleUrls: ['./cube-timer.component.css']
})
export class CubeTimerComponent implements OnInit {

  time: ITime;
  timer: any;
  glyphspawner: any;
  interval: ITime;
  soon: boolean = false;

  
  constructor(public activated: ActivatedRoute) {
    const iteration = activated.snapshot.paramMap.get('iteration') || '0h30m0s';
    const current = activated.snapshot.paramMap.get('current') || iteration;

    this.interval = this.timeSplit(iteration);
    this.time = this.timeSplit(current);

   }

  ngOnInit() {
    this.startTicking();
    // setInterval(()=>{
    //   $('#slot1').scrollTop($('#slot1').scrollTop()+360);
    // }, 1000);
  }

  timeSplit(timeString: string): ITime {
    var split = ['', timeString];
    var splitters = ['h', 'm', 's'];
    var temp: ITime = {
      h: 0,
      m: 0,
      s: 0
    };
    for(var splitter of splitters){
      split = split[1].split(splitter);
      if(split.length == 2)
      {
        temp[splitter] = Number(split[0]);
      }
      else
      {
       split = ['', split[0]]; 
      }
    }

    return temp;

  }

  startTicking(){
    this.soon = false;
    this.timer = setInterval(() => { 
      this.reduceSecond(); 
      setTimeout(() => {
        this.updateUI();
      }, 0);
    }, 1000);

    this.glyphspawner = setInterval(() => {
        var width = 992;
        var height = 180;
        var glyphno = Math.floor(Math.random() * 8);
        var x = 30 + (Math.random() * Math.floor(width-60));
        var y = 30 + (Math.random() * Math.floor(height-60));
        console.log(`Glyph Spawned at [${x},${y}]`);
        let id= Date.now();

        $('#glyph-house').append('<div id="' + id + '" class="glyph" style="left: ' + x + 'px; top: ' + y + 'px; background-image: url(assets/fn-sym-' + glyphno + '.png);"></div>');
        setTimeout(() => {
          $('#' + id).remove();
        },3100);
    }, 100);
  }

  updateUI(){
    var slots = [0,0,0,0,0,0];
      if(this.time.h > 9)
      {
        var hourslots = String(this.time.h).split('');
        slots[0] = Number(hourslots[0]);
        slots[1] = Number(hourslots[1]);
      }
      else
      {
        slots[0] = 0;
        slots[1] = this.time.h;
      }

      if(this.time.m > 9)
      {
        var minuteslots = String(this.time.m).split('');
        slots[2] = Number(minuteslots[0]);
        slots[3] = Number(minuteslots[1]);
      }
      else
      {
        slots[2] = 0;
        slots[3] = this.time.m;
        if(!this.soon && this.time.m < 5 && this.time.h == 0)
        {
          this.soon = true;
        }
      }

      if(this.time.s > 9)
      {
        var secondslots = String(this.time.s).split('');
        slots[4] = Number(secondslots[0]);
        slots[5] = Number(secondslots[1]);
      }
      else
      {
        slots[4] = 0;
        slots[5] = this.time.s;
      }

      console.log(slots);

      for(var slot in slots){
        var actualSlot = Number(slot)+1;
        // $('#slot'+actualSlot).animate({ scrollTop: ((10-slots[slot])*300) }, 100);
        $('#slot'+actualSlot).scrollTop((10-slots[slot])*300);
      }
  }

  reduceSecond(s?: number) {
    if(this.time.s)
    {
      this.time.s--;;
    }
    else
    {
      this.reduceMinute();
    }
  }

  reduceMinute() {
    if(this.time.m)
    {
      this.time.m--;
      this.time.s = 59;
    }
    else
    {
      this.reduceHour();
    }
  }

  reduceHour() {
    if(this.time.h)
    {
      this.time.h--;
      this.time.m = 59;
      this.time.s = 59;
    }
    else
    {
      clearInterval(this.timer);
      clearInterval( this.glyphspawner);
      this.timer = null;
      this.glyphspawner = null;
      setTimeout(() => {
        this.time = this.interval;
        this.startTicking();
      }, 5000);
    }
  }

}


export interface ITime{
    h?: number;
    m?: number;
    s?: number;
}