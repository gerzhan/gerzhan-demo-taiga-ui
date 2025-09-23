import { Component, OnInit } from '@angular/core';
import { AuthEngineService } from '../auth/auth-engine.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit {
  constructor(private authService: AuthEngineService) {}

  ngOnInit(): void {}

  login() {
    this.authService.login();
  }
}
