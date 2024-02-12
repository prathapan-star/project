import { Component } from '@angular/core';
import { AdminService } from '../shared/admin.service';
 
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartItems: any[] = [];
  totalAmount: number = 0;
 
  constructor(private cartService: AdminService) {}
 
  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
    });
 
    this.cartService.totalAmount$.subscribe(amount => {
      this.totalAmount = amount;
    });
  }
}