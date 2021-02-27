import { Component, OnInit } from '@angular/core';
import { AvailableService } from '../available.service';

@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.css']
})
export class ShopingCartComponent implements OnInit {
available$;
  constructor(private availableService:AvailableService) {

    this.available$=this.availableService.getAll();
   }

  ngOnInit(): void {
  }

}
