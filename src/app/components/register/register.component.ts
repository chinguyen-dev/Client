import {Component} from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  isEye = false;
  type = 'password';

  toggleEye() {
    this.isEye = !this.isEye;
    this.type = this.isEye ? 'text' : 'password';
  }
}
