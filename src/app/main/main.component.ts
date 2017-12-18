import { Component, OnInit,trigger,state,style,transition,animate,keyframes } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import * as _ from "lodash";
declare var $: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    
            trigger('focusPanel', [
                state('inactive', style({
                    transform: 'scale(1)',
                   // backgroundColor: '#eee'
                })),
                state('active', style({
                    transform: 'scale(1.1)',
                    //backgroundColor: '#cfd8dc'
                })),
                transition('inactive => active', animate('100ms ease-in')),
                transition('active => inactive', animate('100ms ease-out'))
            ]),
    
            trigger('movePanel', [
                
                transition('void => *', [
                    animate(600, keyframes([
                        style({opacity: 0, transform: 'translateY(-200px)', offset: 0}),
                        style({opacity: 1, transform: 'translateY(25px)', offset: .75}),
                        style({opacity: 1, transform: 'translateY(0)', offset: 1}),
                    ]))
                ])
    
            ])
    
    
        ]
})
export class MainComponent implements OnInit {
  myflag: any;
  name: string;
  editMode:boolean;
  _tab1: boolean;
  _tab2: boolean;
  _tab3: boolean;
  vacation_data: any;
  _vacation: any;
  late_data: any;
  _late: any;
  help_data: any;
  _help: any;
  selectedIndex: number;
  myfilter:any;
  state: string;
  i: number;
  mydata: any;
  user_name: any;
  constructor(private route: ActivatedRoute , private _router: Router) {
    this.myflag="";
    this.user_name="";
    this.i=0;
    this.mydata={};
    this.state='inactive';
    this.editMode=false;
    this._tab1=true;
    this._tab2=false;
    this._tab3=false;
    this._vacation="_vacation";
    this._late="_late";
    this._help="_help";
    this.myfilter={};
    this.vacation_data=[];
    this.help_data=[];
    this.late_data=[];
    this.myfilter.user_name=this.user_name;
    //this.vacation_data=[{userName:'ahmed',thedate:'10/2/2017 To 15/2/107',reason:'sick'},{userName: 'omar',thedate:'20/5/2017 To 25/6/107',reason:'travling'},{userName: 'mona',thedate:'5/3/2017 To 10/4/107',reason:'sick'}];
    this.myfilter={userName: 'mohamed',thedate:'10/2/2017 To 15/2/107',reason:'sick'}
    this.vacation_data.push(this.myfilter); 
    this.myfilter={userName: 'omar',thedate:'20/5/2017 To 25/6/107',reason:'travling'}
    this.vacation_data.push(this.myfilter);
    this.myfilter={userName: 'mona',thedate:'5/3/2017 To 10/4/107',reason:'sick'}
    this.vacation_data.push(this.myfilter);
    this.myfilter={};
    //////////////////////////////////////////
   //this.late_data=[{userName: 'ahmed',Howlong:'2 hours',whay:'transportation'},{userName: 'omar',Howlong:' 30 minutes',whay:'transportation'},{userName: 'mona',Howlong:'1 hours',whay:'transportation'}];
    this.myfilter={userName: 'mohamed',Howlong:'2 hours',whay:'transportation'}
    this.late_data.push(this.myfilter);  
    this.myfilter={userName: 'omar',Howlong:' 30 minutes',whay:'transportation'}
    this.late_data.push(this.myfilter);
    this.myfilter={userName: 'mona',Howlong:'1 hours',whay:'transportation'}
    this.late_data.push(this.myfilter);
    this.myfilter={};
    //////////////////////////////////////////
    //this.help_data=[{userName: 'ahmed',problemm:'email verification'},{userName: 'omar',problemm:'email verification'},{userName: 'mona',problemm:'email verification'}];
    this.myfilter={userName: 'mohamed',problemm:'email verification'}
    this.help_data.push(this.myfilter); 
    this.myfilter={userName: 'omar',problemm:'email verification'}
    this.help_data.push(this.myfilter);
    this.myfilter={userName: 'mona',problemm:'email verification'}
    this.help_data.push(this.myfilter);
    this.myfilter={};

    
  };
  toggleMove() {
    this.state = (this.state === 'inactive' ? 'active' : 'inactive');
}
  reset()
  {
    this.myfilter={};
    this.editMode=false;
  }
  applyReq(value: any)
  {
    this.myfilter.userName=this.user_name;
           if(value===this._vacation )
            {  
              this.vacation_data.push(this.myfilter);
              this.myfilter={};
            }
            else if(value===this._late)
            {
              this.late_data.push(this.myfilter);
              this.myfilter={};
            }
            else
            {
              this.help_data.push(this.myfilter);
              this.myfilter={};
            }

}
  edit(item,index)
  {
    this.editMode=true;
    this.selectedIndex=index;
    this.myfilter=_.cloneDeep(item);
  }
  update(value:any)
  {
       if(value===this._vacation )
              {    
                this.vacation_data.splice(this.selectedIndex , 1 , this.myfilter);
                 this.myfilter = {};
              }
              else if(value===this._late)
              {
                   this.late_data.splice(this.selectedIndex , 1 , this.myfilter);
                    this.myfilter = {};
              }
              else
              {
                this.help_data.splice(this.selectedIndex , 1 , this.myfilter);
                this.myfilter = {}
              }
              this.editMode=false;
         
    
}
delete(index: number,value:any)
{ 
  if(this.editMode)
  {
    this.reset();
  }
  
  if(value===this._vacation)
  {
  this.vacation_data.splice(index , 1);	
  }
  else if(value===this._late)
  {
  this.late_data.splice(index , 1);	  
  }
  else
  {
    this.help_data.splice(index , 1);	   
  }
}
 
 tab1()
 {
  this._tab1=true;
  this._tab2=false;
  this._tab3=false;
 }
 tab2()
 {
   this._tab2=true;
   this._tab1=false;
   this._tab3=false;
 }
 tab3()
 {
   this._tab3=true;
   this._tab1=false;
   this._tab2=false;
 }
 dismiss()
 {
  this.myflag = this.route.snapshot.params['flag'];
  this.user_name = this.route.snapshot.params['user'];
  if(this.myflag=='u')
  {
    this._router.navigate(['/main','u',this.user_name]);
    this._tab1=true;      
  }
  else if(this.myflag=='a')
  {
    this._router.navigate(['/main','a']);
  }

   if(this.editMode===true)
   {
     this.editMode=false;
   }

   this.mydata={};
   this.myfilter={};
  this._tab3=false;
  this._tab2=false;
 }
 over()
 {

 }
  ngOnInit() {
   
    this.myflag = this.route.snapshot.params['flag'];
    this.user_name = this.route.snapshot.params['user'];
    if(this.myflag=='u')
    {
      this._router.navigate(['/main','u',this.user_name]);      
    }
    else if(this.myflag=='a')
    {
      this._router.navigate(['/main','a']);
    }
    else{
      alert("URL Error , Please check your link");
    }
  }

}
