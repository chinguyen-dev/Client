import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";
import {StorageService} from "../../services/storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{


  isEye = false;
  type = 'password';
  loginForm !: FormGroup;
  constructor(private fb : FormBuilder,
              private authenticate : AuthenticationService,
              private storeService: StorageService,
              private router: Router) {
  }
 ngOnInit() {
   this.loginForm = this.fb.group(
     {
       email : ['', Validators.compose([Validators.required,Validators.email,])],
       password: ['', Validators.required]
     }
   )
 }

  toggleEye() {
    this.isEye = !this.isEye;
    this.type = this.isEye ? 'text' : 'password';
  }

  onSubmit() {
    let user = this.loginForm.value
    this.authenticate.login(user).subscribe({
      next : res => {
        this.storeService.saveUser(res)
        this.router.navigateByUrl('')
      },
      error: err => {
        alert("Tài khoản hoặc mật khẩu không đúng")
      }
    }
    )
  }
}
