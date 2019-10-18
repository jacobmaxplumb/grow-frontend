import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: User;

  constructor(private router: Router, private userService: UserService) {}

  loginUser() {
    this.userService.authenticate(this.user).subscribe(res => {
      console.log(res);
    })
  }

  navigateToRegister() {
    this.router.navigate(['register']);
  }
}
