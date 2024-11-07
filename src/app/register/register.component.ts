import { Component } from '@angular/core';
import { NodeUtilityService } from '../node-utility.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  msg:string='';
  mydate = new Date();
  mystyle:any={'color':'#8000ff'};
  myreqstyle:any={'color':'#ff33ff'};
  email1:string="";

  constructor(private util:NodeUtilityService){
    setInterval(()=>{
      this.mydate = new Date();
    },1000);

  }

  onSubmit(form: any){
    this.util
      .insert_admin(form.value.username, form.value.phno, form.value.email, form.value.pwd, form.value.gender, form.value.address, form.value.terms )
      .subscribe((data) => {
        if (data.status) this.msg = data.message;
      });
  }
}
