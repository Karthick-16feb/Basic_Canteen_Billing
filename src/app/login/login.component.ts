import { Component } from '@angular/core';
import { NodeUtilityService } from '../node-utility.service';
import { Router } from '@angular/router';
//import { FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  //imports: [ReactiveFormsModule, CommonModule],

})
export class LoginComponent {
  msg:string='';
  email1:string ='';
  mydate = new Date();
  mystyle:any={'color':'fushia'};
  constructor(private util:NodeUtilityService, private router: Router){
    setInterval(()=>{
      this.mydate = new Date();
    },1000);
  }

  onSubmit(form: NgForm) {
    this.util.admin_login(form.value.email, form.value.pwd)
      .subscribe((data) => {
        if (data.status) {
          this.msg = data.message;
          // Redirect to home component
          localStorage.setItem('user',form.value.email)
          this.router.navigate(['/add-food']); // Assuming '/home' is the path to your home component
        } else {
          this.msg = data.message;
        }
      });
  }
}
