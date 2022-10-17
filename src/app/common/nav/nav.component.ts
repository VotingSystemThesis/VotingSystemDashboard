import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  @Input() isHide = false;
  constructor(
    private snackBar: MatSnackBar,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {}
  logout() {
    this.loginService.logOut();
    this.snackBar.open('Ha cerrado sesión correctamente', '', {
      duration: 3000,
      panelClass: ['yellow-snackbar'],
    });
  }
}
