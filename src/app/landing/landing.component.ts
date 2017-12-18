import { Component, OnInit, trigger,state,style,transition,animate,keyframes  } from '@angular/core';
import {Router} from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { forEach } from '@angular/router/src/utils/collection';
declare var $: any;
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  admins: any[];
  flag: any;
  users: any;
  state: string;
  i:number;
  the_user:any;
  constructor(private _router: Router)
  {
    this.i=0;
    this.the_user="";
    this.state='inactive';
    this.flag="";
    this.admins = [
      {email: 'mohamed@gmail.com', password:'2015'},{email: 'omar@gmail.com', password:'2015'},{email: 'mona@gmail.com', password:'2015'}];
     this.users = [
      {email: "mohamed@yahoo.com", password:"2015", user_name:"mohamed",fullName:""},{email: 'omar@yahoo.com', password:'2015',user_name:"omar",fullName:""},{email: 'mona@yahoo.com', password:'2015',user_name:"mona",fullName:""}];
  }
toggleMove() {
    this.state = (this.state === 'inactive' ? 'active' : 'inactive');
}
res()
{
    $('#mymodallogin').modal('hide');
}
setSubmit(value: any)
{
  $('#mymodalregister').modal('hide');
  if(value.logad==true)
  {
    this.admins.push(value);
  }
  else{
    this.users.push(value);    
  }
   console.log(this.users); 
   console.log(this.admins); 
   
}
check(value: any)
  {
    $('#mymodallogin').modal('hide');
    for(this.i=0 ; this.i<this.users.length ; this.i+=1)
    {
      if(this.admins[this.i].email==value.myemail && this.admins[this.i].password==value.Password)
      {
       this.flag='a';
       this._router.navigate(['/main' , this.flag ]);
       break;
     }
      else if(this.users[this.i].email==value.myemail && this.users[this.i].password==value.Password)
        {
        this.the_user = this.users[this.i].user_name;
        this.flag='u';
        this._router.navigate(['/main',this.flag,this.the_user]);
          break
        }
        else if(this.i+1==this.users.length)
        {
          alert("Please enter a Valid Email, Or Register if You aren't");
          break;
        }
    }
  }
  ngOnInit() {
  }

}
