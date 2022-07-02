import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IOrder } from './order';
import { orders } from './orders-data';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  orders = orders;
  constructor() {}

  getOrders(): Observable<IOrder[]> {
    return of(this.orders);
  }

  addOrder() {}

  editOrder() {}

  deleteOrder(orderId: number | undefined) {
    const foundIndex = this.orders.findIndex((order) => order.id === orderId);
    if (foundIndex > -1) {
      this.orders.splice(foundIndex, 1);
    }
  }
}
