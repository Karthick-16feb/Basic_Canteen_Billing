import { Component } from '@angular/core';
import { NodeUtilityService } from '../node-utility.service';


@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrl: './forget.component.css'
})
export class ForgetComponent {
  msg:string='';
  mydate = new Date();
  mystyle:any={'color':'#00ffff'};
  constructor(private util:NodeUtilityService){
    setInterval(()=>{
      this.mydate = new Date();
    },1000);
  }

  onSubmit(form: any){
    this.util
    .change_pwd(form.value.email, form.value.pwd)
    .subscribe((data) => {
      if (data.status) this.msg = data.message;
    });
  }
}
