import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {
  loginDetails = { username: '', password: '' };
  errorMessage: string;

  constructor(private userService: UserService, private router: Router) {}

  login() {
  }

}
