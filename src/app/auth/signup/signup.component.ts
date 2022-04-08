import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private auth:ApiService,private route:Router) { }
  signup=new FormGroup({
    name:new FormControl('',[Validators.required,
      Validators.minLength(5),]),
    email:new FormControl('',[Validators.email,Validators.required]),
    phone:new FormControl('',[Validators.required,Validators.minLength(10)]),
    address:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required,
    Validators.minLength(8)],)
  });
  ngOnInit(): void {
  }
  gotosignin()
  {
    this.route.navigateByUrl('sign-in');
  }
  signupuser(){
    console.log(this.signup.value);
    this.auth.postuser(this.signup.value).subscribe((res)=>{
      this.route.navigateByUrl('');
    });
  }

}
