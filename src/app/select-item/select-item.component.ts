import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-select-item',
  templateUrl: './select-item.component.html',
  styleUrls: ['./select-item.component.css']
})
export class SelectItemComponent implements OnInit {

  @Input() Item:any ;
  @Input() index:any;
  @Output() deleteItem = new EventEmitter();
  @Output() countIncreaseItem=new EventEmitter();
  @Output() countDecreaseItem=new EventEmitter();
  constructor(
    private cartservice:CartService,
    private route:Router) { }
  no_Item:number=1;
  Price:any;
  removeitem(){
    console.log("banda pela maghiaa chodi pua tu gandi mara")
    this.deleteItem.emit(this.index)
  }
  
  increase(){
    this.no_Item++;
    // console.log((this.Item.price)*this.no_Item);
    console.log(this.Price)
    const price =(this.Item.price)+this.Price
    this.cartservice.setPrice(this.index,price)
    // this.product.increaseItemPrice(this.no_Item)
    this.countIncreaseItem.emit(this.no_Item)
  }
  decrease(){
    // const money= (this.Item.price)/(this.no_Item);
    // console.log(money)
    console.log(this.Price);
    
    this.no_Item--;
    const price =(this.Item.price)-this.Price
    this.cartservice.setPrice(this.index,price)
    // console.log("decrease");
    this.countDecreaseItem.emit(this.no_Item)
  }
  gotoProductDetails(productId:number){
    this.route.navigateByUrl(`eachproduct/${productId}`)
  }
  ngOnInit(): void {
    this.Price=this.Item.price;
  
  }

}
