import { CheckoutComponent } from './checkout.component';
import { CartSummaryComponent } from './cartSummary.component';
import { StoreComponent } from './store.component';
import { ModelModule } from './../model/model.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartDetailComponent } from './cartDetail.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
    declarations: [StoreComponent, CartSummaryComponent, CheckoutComponent, CartDetailComponent],
    exports: [StoreComponent, CartDetailComponent, CheckoutComponent]
})
export class StoreModule{}