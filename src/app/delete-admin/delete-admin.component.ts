import { Component } from '@angular/core';
import { NodeUtilityService } from '../node-utility.service';

@Component({
  selector: 'app-delete-admin',
  templateUrl: './delete-admin.component.html',
  styleUrl: './delete-admin.component.css'
})
export class DeleteAdminComponent {
  msg:string='';
  mystyle:any={'color':'#cccc00'};
  mydate = new Date();
  myreqstyle:any={'color':'#D56A60'};


  constructor(private util:NodeUtilityService){
     
    setInterval(()=>{
      this.mydate = new Date();
    },1000);
    
  }

  onSubmit(form: any){
    this.util
    .delete_admin(form.value.email)
    .subscribe((data) => {
      if (data.status) this.msg = data.message;
    });
  }
}
