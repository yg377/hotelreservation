import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AvailableService } from '../available.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-available',
  templateUrl: './available.component.html',
  styleUrls: ['./available.component.css']
})
export class AvailableComponent implements OnInit {
categories$;
 
constructor(
  private router:Router,
  private categoryService : CategoryService,
  private availableService:AvailableService) { 
this.categories$=categoryService.getCategories();
}

save(available){
 this.availableService.create(available); 
 this.router.navigate(['/shoping-cart']);
}
  ngOnInit(): void {
  }

}