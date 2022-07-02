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

  editOrder(orderId: number, order: IOrder) {
    const foundIndex = this.orders.findIndex((order) => order.id === orderId);
    this.orders[foundIndex] = { ...this.orders[foundIndex], ...order };
  }

  deleteOrder(orderId: number | undefined) {
    const foundIndex = this.orders.findIndex((order) => order.id === orderId);
    if (foundIndex > -1) {
      this.orders.splice(foundIndex, 1);
    }
  }
}
