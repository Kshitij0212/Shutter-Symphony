import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {

  @ViewChild("work") workSection !: ElementRef;

  constructor(private router: Router) {

  }

  goToWildlife() {
    this.router.navigate(["/wild-life"]);
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo(0, 0);
      });
  }

  goToAdvertisement() {
    this.router.navigate(["/advertisement"]);
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo(0, 0);
      });
  }

  goToMusic() {
    this.router.navigate(["/music"]);
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo(0, 0);
      });
  }

  goToWork() {
    this.workSection.nativeElement.scrollIntoView({ behaviour: 'smooth' });
  }
}
