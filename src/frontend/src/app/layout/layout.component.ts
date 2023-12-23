import {Component, HostListener} from '@angular/core';
import {RouterModule} from "@angular/router";
import {FooterComponent} from "../components/footer/footer.component";
import {HeaderComponent} from "../components/header/header.component";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  standalone: true,
  imports: [
    RouterModule,
    HeaderComponent,
    FooterComponent,
  ]
})
export class LayoutComponent {
  navBarScrollPosition:boolean = false;

  @HostListener('window:scroll', [])
  scroll ():void {
    if (window.scrollY < 100) {
      this.navBarScrollPosition = false;
    } else {
      this.navBarScrollPosition = true;
    }
  }

  protected readonly window = window;
  protected readonly innerWidth = innerWidth;
}
