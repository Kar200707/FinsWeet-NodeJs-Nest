import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import {RouterModule} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {lastIndexOf} from "json-server-auth";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [
    RouterModule,
    MatIconModule
  ]
})
export class HeaderComponent {
  navBarScrollPosition: boolean = false;
  @HostListener('window:scroll', [])
  scroll ():void {
    if (window.scrollY < 200) {
      this.navBarScrollPosition = false;
    } else {
      this.navBarScrollPosition = true;

      let footer:HTMLElement = document.getElementsByTagName('footer')[0];
      window.scrollY > (footer.offsetTop - 500) ? this.navBarScrollPosition = false : true;
    }
  }

  scrollToElement(): void {
    let footer:HTMLElement = document.getElementsByTagName('footer')[0];

    footer.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  protected readonly innerWidth = innerWidth;
}
