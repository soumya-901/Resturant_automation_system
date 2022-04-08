import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  product;
  btnname=true;
  convert=false;
  constructor(
    private allProduct:ApiService,
    private cart:CartService,
    private route:Router
    ) { }

  ngOnInit(): void {
    this.allProduct.getProducts()
    .subscribe((data)=>{
      this.product=data;
      console.log(this.product);

    })
  }
  gotocart(item:any)
  {
    this.cart.setToCart(item);
    console.log(item);
    this.route.navigateByUrl('cart');
    
  }

}
