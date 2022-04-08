import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

user={
  "name":"soumyaparhi",
  "age":21,
  "password":"ranjan"
}
user2={
  "name":"soumyaranjan",
  "password":"ranjan"
}
  constructor(private allProduct:ApiService) { }
  products;
  ngOnInit(): void {
    this.allProduct.getProducts()
    .subscribe((data)=>{
      console.log(data);
      this.products=data;

    })
    this.allProduct.getUser().subscribe((data)=>{
      console.log(data);
    })

    // this.allProduct.postuser(this.user).subscribe((data)=>{
    //   console.log(data);
    // })
    // this.allProduct.sigin(this.user2).subscribe((data)=>{
    //   console.log(data);
    // })
  }

  addtocart()
  {
    console.log("working fine");
  }
  
}
