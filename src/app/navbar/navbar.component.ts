import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAuthenticated: boolean = false;
  // isAuthSub: Subscription;
  displayName: string = null;
  authenticate=this.auth.authenticate;
  // userDataSub: Subscription;
  // isAdminSub: Subscription;
  isAdmin: boolean = false;
  Images="assets/images"
  constructor(private auth:ApiService) {

   }

  ngOnInit(): void {
  }

}
