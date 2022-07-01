import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersResolver } from './orders.resolver';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  {
    path: '',
    resolve: {
      resolvedOrdersData: OrdersResolver,
    },
    component: OrdersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {}
