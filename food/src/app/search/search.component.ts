import { Component,HostListener } from '@angular/core';
import { AdminService } from '../shared/admin.service';
import { debounceTime } from 'rxjs';
import { RestListComponent } from '../rest-list/rest-list.component';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators ,FormControl} from '@angular/forms';
import { Admin } from '../shared/admin';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  // Inside the SearchComponent class
searchComplete: boolean = false;
searchContent:string='';
  Admins:any=[];
  searchForm!: FormGroup;
  fixedTopGap: number = 0;
  searchedData:Admin[];
  constructor(public as1:AdminService,private fb:FormBuilder,private route:Router){}
  ngOnInit(){
    
    this.searchForm=this.fb.group({
      searchText:[]
          })
         this.loadRests();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    // Update the value of fixedTopGap based on window size or any other logic
    this.fixedTopGap = event.target.innerWidth > 768 ? 50 : 0;
  }
  

  onSearchTextChange(event:any){

    console.log('event fired');
   
    this.searchForm.controls['searchText'].valueChanges
    .pipe(debounceTime(500))
    .subscribe(()=> {
      console.log(' ');
     
      if(this.searchForm.controls['searchText'].value.length > 2) {
        this.searchContent=event.target.value;
        this.loadRests();
        console.log('admin',this.Admins);
        
        const searchedBooks = this.Admins?.filter((b:any) => b.name.toLowerCase().includes(event.target.value))
        console.log('searchedBooks', searchedBooks);
        this.searchedData = searchedBooks;
      }
      if(this.searchForm.controls['searchText'].value.length == 0) {       
       // this.Admins=[]//this.loadRests();
        console.log('0 ',this.Admins);
      }
    })
  }
  loadRests() {
  
    return this.as1.getRests().subscribe((data:{})=>{
      console.log(data)
      this.Admins= data ;
      this.searchComplete = true;
    });
   
  }
  openBootstrapModal(admin: any): void {
    const initialState = {
      name: admin.name,
      location: admin.location,
      cuisines: admin.cuisines,
      foodItems: admin.foodItems
    };
  
    // this.bsModalRef = this.modalService.show(BootstrapmodalComponent, { initialState });
  }
}