import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router) {}
  loginForm = new FormGroup({
    user: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  ngOnInit(): void {}

  login() {
    if (this.loginForm.valid) {
      let bodyToSend = {
        username: this.loginForm.get('user')?.value,
        password: this.loginForm.get('password')?.value,
      };
      console.log(bodyToSend);
      this.loginService.authenticate(bodyToSend).subscribe((data: any) => {
        this.loginService.handleToken(data.token);
        console.log(data);
      });
    } else {
    }
  }
}
