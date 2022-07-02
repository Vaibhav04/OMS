import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders/orders.component';
import { OrdersShellComponent } from './orders-shell/orders-shell.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { SharedModule } from '../shared/shared.module';
import { OrderFormModalComponent } from './order-form-modal/order-form-modal.component';

@NgModule({
  declarations: [OrdersComponent, OrdersShellComponent, OrdersListComponent, OrderFormModalComponent],
  imports: [CommonModule, OrdersRoutingModule, SharedModule],
})
export class OrdersModule {}
