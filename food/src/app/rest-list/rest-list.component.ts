import { Component } from '@angular/core';
import { AdminService } from '../shared/admin.service';

@Component({
  selector: 'app-rest-list',
  templateUrl: './rest-list.component.html',
  styleUrls: ['./rest-list.component.scss']
})
export class RestListComponent {
  Admins: any = [];

  constructor(private as: AdminService) {}

  ngOnInit() {
    this.loadRest();
  }

  loadRest() {
    this.as.getRests().subscribe((data: {}) => {
      this.Admins = data;
    });
  }

  deleteRest(id: any) {
    if (window.confirm('Are you sure you want to delete?')) {
      this.as.deleteRest(id).subscribe(() => {
        this.loadRest();
      });
    }
  }

  getFoodItemsAsString(foodItems: any[]): string {
    if (foodItems && foodItems.length > 0) {
      return foodItems.map(item => `${item.name} ($${item.price})`).join(', ');
    }
    return 'No food items';
  }
}
