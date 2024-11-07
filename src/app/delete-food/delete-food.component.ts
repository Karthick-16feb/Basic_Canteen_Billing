import { Component } from '@angular/core';
import { NodeUtilityService } from '../node-utility.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-food',
  templateUrl: './delete-food.component.html',
  styleUrl: './delete-food.component.css'
})
export class DeleteFoodComponent {
  user: string = '';
  msg:string='';
  mydate = new Date();
  mystyle:any={'color':'#8000ff'};
  myreqstyle:any={'color':'#ff33ff'};
  constructor(private util:NodeUtilityService, private router: Router){
    let u: any = localStorage.getItem('user');
    setInterval(()=>{
      this.mydate = new Date();
    },1000);
    this.user = u;
    if (u == null || u == '') {
      this.router.navigateByUrl('login');
    }
  }

  onSubmit(form: any){
    this.util
      .delete_item(form.value.food_name)
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
