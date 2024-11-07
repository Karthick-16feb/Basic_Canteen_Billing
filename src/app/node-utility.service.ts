import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NodeUtilityService 
{
  url:string="http://localhost:5000/";
  constructor(private httpClient:HttpClient) 
  { 

  }
  insert_admin(username:string, phno:number, email:string, pwd:string, gender:string, address:string, terms:boolean ):Observable<any>
  {
    return this.httpClient.get(this.url+"insert_admin?username="+username+"&phno="+phno+"&email="+email+"&pwd="+pwd+"&gender="+gender+"&address="+address+"&terms="+terms);
  }
  admin_login(email:string, pwd:string):Observable<any>{
    return this.httpClient.get(this.url+"admin_login?email="+email+"&pwd="+pwd);
  }

  change_pwd(email:string, pwd:string):Observable<any>{
    return this.httpClient.get(this.url+ "change_pwd?email="+email+"&pwd="+pwd);
  }

  delete_admin(email:string):Observable<any>{
    return this.httpClient.get(this.url+"delete_admin?email="+email);
  }

  insert_food(food_name:string, amount:number):Observable<any>
  {
    return this.httpClient.get(this.url+"insert_food?food_name="+food_name+"&amount="+amount);
  }

  update_amt(food_name:string, amount:string):Observable<any>{
    return this.httpClient.get(this.url+ "update_amt?food_name="+food_name+"&amount="+amount);
  }

  delete_item(food_name:string):Observable<any>{
    return this.httpClient.get(this.url+"delete_item?food_name="+food_name);
  }

  showfood(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.url + 'show_food');
  }

}
