import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'validation APP';

  form=new FormGroup(
    {
      uname:new FormControl('',[Validators.required,Validators.minLength(3)]),
      email:new FormControl('',[Validators.required,Validators.email
      ]),
      body:new FormControl('',[Validators.required,Validators.maxLength(5)])
    });

    get f(){
      return this.form.controls;
    }

    submit(){
      console.log(this.form.value);
    }
 
  ngOnInit(): void {
    
  }
  
}
