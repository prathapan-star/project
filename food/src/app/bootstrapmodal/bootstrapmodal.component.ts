import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AdminService } from '../shared/admin.service';
 
@Component({
  selector: 'app-bootstrapmodal',
  templateUrl: './bootstrapmodal.component.html',
  styleUrls: ['./bootstrapmodal.component.scss']
})
export class BootstrapmodalComponent {
  name!: string;
  price!: string;
  location!: string;
  cuisines!: string;
  foodItems: any[] = [];
  modalClosing = false; // Flag to track if modal is being closed
 
  constructor(public bsModalRef: BsModalRef, private cartService: AdminService) {}
 
  addToCart(foodItem: any): void {
    if (!this.modalClosing) { // Check if modal is not being closed
      this.cartService.addToCart(foodItem);
      foodItem.showAddedMessage = true;
      setTimeout(() => {
        foodItem.showAddedMessage = false;
      }, 1000);
    }
  }
 
  closeModal(): void {
    this.modalClosing = true; // Set flag to true before closing modal
    this.bsModalRef.hide();
  }
 
  getFoodItemsAsString(foodItems: any[]): string {
    if (foodItems && foodItems.length > 0) {
      return foodItems.map(item => `${item.name} ($${item.price})`).join(', ');
    }
    return 'No food items';
  }
}
