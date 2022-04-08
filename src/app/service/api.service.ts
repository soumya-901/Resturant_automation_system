import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { promise } from 'protractor';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  authenticate="sign in";
  getProducts(){
    // console.log(id);
    
    let url = `/api/getAll/item`;
    return this.http.get(url);
  }
  getUser(){
    let url ='api/getAll/item';
    return this.http.get(url);
  }
  postuser(user:any){
    let url='api/post';
    return this.http.post(url,user);
  }
  sigin(user:any) {
    let url='api/signin';
    return  this.http.post(url,user);
  }
}
