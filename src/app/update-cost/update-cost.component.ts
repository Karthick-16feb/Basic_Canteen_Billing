import { Component } from '@angular/core';
import { NodeUtilityService } from '../node-utility.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-cost',
  templateUrl: './update-cost.component.html',
  styleUrl: './update-cost.component.css'
})
export class UpdateCostComponent {
  user: string = '';
  msg:string='';
  mydate = new Date();
  myreqstyle:any={'color':'#F56A60'};

  constructor(private util:NodeUtilityService, private router: Router){
    let u: any = localStorage.getItem('user');
    this.user = u;
    if (u == null || u == '') {
      this.router.navigateByUrl('login');
    }
    setInterval(()=>{
      this.mydate = new Date();
    },1000);
  }

  onSubmit(form: any){
    this.util
      .update_amt(form.value.food_name, form.value.amount )
      .subscribe((data) => {
        if (data.status) this.msg = data.message;
      });
  }
  logout()
  {
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }

}
