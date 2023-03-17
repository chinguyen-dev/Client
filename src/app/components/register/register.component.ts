import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private authService: AuthenticationService, private router: Router) {
  }

  isEye = false;
  type = 'password';

  toggleEye() {
    this.isEye = !this.isEye;
    this.type = this.isEye ? 'text' : 'password';
  }

  onSubmit(f: NgForm) {
    this.authService.register(f.value).subscribe(value => {
      if (value) this.router.navigateByUrl('/account/login');
    })

  }
}
