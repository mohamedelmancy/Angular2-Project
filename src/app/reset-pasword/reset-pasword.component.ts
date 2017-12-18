import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-reset-pasword',
  templateUrl: './reset-pasword.component.html',
  styleUrls: ['./reset-pasword.component.css']
})
export class ResetPaswordComponent implements OnInit {

  constructor() { }
  onSubmition()
  {

  }
  onSub()
  {
    $("#mymodalreset").modal("hide");
  }
  ngOnInit() {
  }

}
