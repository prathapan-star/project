import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { AdminService } from '../shared/admin.service';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';
import { Input } from '@angular/core';
import { FormsModule,FormControl,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  @Input() SignupDetails = {name:'',password:''}
  constructor (public restApi : UserService , public router : Router)  {}
  ngOnInit()  {}
  addSignup(data : any )  {
    this.restApi.createUser(this.SignupDetails).subscribe((data:{}) => {
      this.router.navigate(['/home']);
    });
  }
}
