import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AdminService } from '../shared/admin.service';
 
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  RestDetails = {
    name: '',
    location: '',
    rating: '',
    img: '',
    cuisines: '',
    foodItems: []
  };
  cuisinesInput: string = '';
  foodItemName: string = '';
  foodItemPrice: number = 0;
  foodItemImage:string=''
 
  constructor(public adminService: AdminService, public router: Router) {}
 
  addRest() {
 
    const cuisinesArray = this.cuisinesInput.split(',');
 
    this.RestDetails.cuisines = cuisinesArray.join(', ');
   
 
    this.adminService.createRest(this.RestDetails).subscribe((data: {}) => {
      this.router.navigate(['/rest-list']);
    });
  }
 
  addFoodItem() {
 
    this.RestDetails.foodItems.push({ name: this.foodItemName, price: this.foodItemPrice , image:this.foodItemImage});
   
 
    this.foodItemName = '';
    this.foodItemPrice = 0;
    this.foodItemImage='';
  }
}