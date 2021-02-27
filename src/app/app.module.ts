import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MyNavbarComponent } from './my-navbar/my-navbar.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import {RouterModule} from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PrductFormComponent } from './admin/prduct-form/prduct-form.component';
import { LogInComponent } from './log-in/log-in.component';
import { XComponent } from './x/x.component';
import {firestore} from 'firebase/app';
import {FormsModule} from '@angular/forms';
import {AngularFireModule}from'@angular/fire';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import {environment}from'../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { AvailableComponent } from './available/available.component';
import {CategoryService} from './category.service'
import { AvailableService } from './available.service';


@NgModule({
  declarations: [ 
    AppComponent, MyNavbarComponent, HomeComponent, RegisterComponent, ShopingCartComponent, CheckOutComponent, OrderSuccessComponent, MyOrdersComponent, PrductFormComponent, LogInComponent, XComponent, AvailableComponent,  
    ],  
   imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),

    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
   RouterModule.forRoot([
{path:'', component:HomeComponent},
{path:'register', component:RegisterComponent},
{path:'check-out', component:CheckOutComponent},
{path:'order-sucess', component:OrderSuccessComponent},
{path:'shoping-cart', component:ShopingCartComponent},
{path:'my-orders', component:MyOrdersComponent},
{path:'log-in', component:LogInComponent},
{path:'available', component:AvailableComponent},
  ]), NgbModule

     ],
  providers: [
    CategoryService,
    AvailableService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
