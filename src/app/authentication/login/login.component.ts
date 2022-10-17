import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}
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
      this.loginService.authenticate(bodyToSend).subscribe(
        (data: any) => {
          this.loginService.handleToken(data.token);
          this.snackBar.open('Bienvenido!', '', {
            duration: 3000,
            panelClass: ['green-snackbar'],
          });
        },
        (err) => {
          this.snackBar.open(
            'Ha ocurrido un error en el inicio de sesión',
            '',
            {
              duration: 3000,
              panelClass: ['red-snackbar'],
            }
          );
        }
      );
    } else {
      this.snackBar.open('Rellene el formulario correctamente', '', {
        duration: 3000,
        panelClass: ['red-snackbar'],
      });
    }
  }
}
