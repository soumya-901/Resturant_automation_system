import { Component, OnInit } from '@angular/core';
import { FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private allProduct: ApiService, private route: Router) { }
  signin = new FormGroup({
    name: new FormControl('', [Validators.required,
    Validators.minLength(5),]),
    password: new FormControl('', [Validators.required,
    Validators.minLength(8)],)
  });

  ngOnInit(): void {
  }
  onsubmitform(data: any) {
    console.log(data);
  }
  isvalid: any;
  valid: any;
  gotosignup() {
    this.route.navigateByUrl('sign-up');
  }

  signinuser() {
    console.log(this.signin.value);
    if (this.signin.valid) {
      this.allProduct.sigin(this.signin.value).subscribe(
        (res) => {
          this.isvalid = res;
          this.valid = this.isvalid.message;
          if (this.isvalid.message == "success") {
            this.route.navigateByUrl('');
            this.allProduct.authenticate = "log out";
          }
          else {
            this.valid = this.isvalid.message;
          }
        },
        (err) => {
          console.log(err)
        }
      )
    }

  }
}
