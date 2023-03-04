import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isModal: boolean = false;

  hoverModal(value: boolean = false) {
    this.isModal = value;
  }
}
