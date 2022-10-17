import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  @Input() isHide = false;
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}
  logout() {
    this.loginService.logOut();
  }
}
