import { Component } from '@angular/core';

@Component({
  selector: 'barlink-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  toggleSidebar() {
          const dom: any = document.querySelector('body');
          dom.classList.toggle('push-right');
      }
}
