import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  currentUrl: string = '/';

  constructor(public router: Router){

  }

  ngOnInit(){
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(
      (event: NavigationEnd) => {
        this.currentUrl = event.urlAfterRedirects;
        window.scrollTo({ top: 0 });
      }
    );
  }

}
