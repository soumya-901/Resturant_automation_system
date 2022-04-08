import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  myCart:any=[]
  cart$ = new BehaviorSubject<any>([])
  allprice:any;
  ItemNumber:number=1;
 //  bgcolor:any="blue";
 
  
 constructor() {
   // console.log(this.cart$);
   
  }
 setToCart(product:any){
   this.myCart.push(product)
   this.cart$.next(this.myCart);
   // console.log(this.myCart);
   this.getPrice();
 }
 getProduct(){
  return this.cart$.asObservable();
 }
 allPrice(){
   var element:number=0;
  for (let eachPrice = 0; eachPrice < this.myCart.length; eachPrice++) {
    element += this.myCart[eachPrice].price;
  }
  return element;
 }
 getPrice(){
   let price = this.allPrice();
   return price;
 }
 setPrice(index:any,price:any){
   this.myCart[index].price=price;
   console.log(this.myCart);

 }
 removeItem(deletedItem:any){
   this.myCart.splice(deletedItem,1)
   this.cart$.next(this.myCart)
   this.getPrice();

 }

}
