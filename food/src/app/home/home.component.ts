import { Component,HostListener } from '@angular/core';
import { AdminService } from '../shared/admin.service';
import { debounceTime } from 'rxjs';
import { RestListComponent } from '../rest-list/rest-list.component';

import { BootstrapmodalComponent } from '../bootstrapmodal/bootstrapmodal.component';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ModalModule} from 'ngx-bootstrap/modal'
import { BsModalService } from 'ngx-bootstrap/modal';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  [x: string]: any;
  Admins:any=[];
  bookForm!: FormGroup;
  isModalOpen = false;
  selectedRow : any;
  isAddNewButtonClicked: boolean = false;
  btnText: string = "Add";
  someObject : any = {};
  constructor(private as : AdminService, private fb: FormBuilder , private modalService : BsModalService){}
  ngOnInit()  {
    this.loadRest();
  }
  loadRest() {
    return this.as.getRests().subscribe((data:{})=>{
      this.Admins = data ;
    });
  }

  deleteRest(id:any)  {
    if(window.confirm('Are you sure , you want to delete ?')) {
      this.as.deleteRest(id).subscribe((data)=>{
        this.loadRest();
      });
    }
  }
  openBootstrapModal(admin: any): void {
    const initialState = {
      name: admin.name,
      location: admin.location,
      cuisines: admin.cuisines,
      foodItems: admin.foodItems
    };
  
    this.bsModalRef = this.modalService.show(BootstrapmodalComponent, { initialState });
  }
  
 
  closeModal(){
    this.isModalOpen = false;
  }
  getFoodItemsAsString(foodItems: any[]): string {
    if (foodItems && foodItems.length > 0) {
      return foodItems.map(item => `${item.name} ($${item.price})`).join(', ');
    }
    return 'No food items';
  }

  onResize() {
    if (this.someObject?.fixedTopGap !== undefined) {
      this.someObject.fixedTopGap = 20;
    }
  }
}
