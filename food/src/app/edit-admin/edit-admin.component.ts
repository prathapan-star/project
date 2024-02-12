import { Component } from '@angular/core';
import { AdminService } from '../shared/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.scss']
})
export class EditAdminComponent {
  id = this.actRoute.snapshot.params['id'];
  adminData!: FormGroup;

  constructor(
    public as: AdminService,
    public actRoute: ActivatedRoute,
    public router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.adminData = this.fb.group({
      name: [''],
      location: [''],
      rating: [''],
      img: [''],
      cuisines: [''],
      foodItems: this.fb.array([]) // Initialize form control for food items
    });

    this.as.getRest(this.id).subscribe((data: any) => {
      this.adminData.patchValue(data); // Patch form with retrieved data
      this.setFoodItems(data.foodItems); // Set food items in the form
    });
  }

  setFoodItems(foodItems: any[]) {
    const foodItemsFormArray = this.adminData.get('foodItems') as FormArray;
    foodItems.forEach(item => {
      foodItemsFormArray.push(this.fb.group({
        name: [item.name],
        price: [item.price]
      }));
    });
  }

  updateRest() {
    if (window.confirm('Are you sure you want to update?')) {
      this.as.updateRest(this.id, this.adminData.value).subscribe(() => {
        this.router.navigate(['admin']);
      });
    }
  }
}
