import { RestDataSource } from './rest.datasource';
import { Order } from './order.model';
import { OrderRepository } from './order.repository';
import { Cart } from './cart.model';
import { StaticDataSource } from './static.datasource';
import { ProductRepository } from './product.repository';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";

@NgModule({
    imports: [HttpModule],
    providers: [ProductRepository, Cart, OrderRepository, Order,
    {provide: StaticDataSource, useClass: RestDataSource}]
})
export class ModelModule{}