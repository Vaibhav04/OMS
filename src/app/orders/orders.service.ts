import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IOrder } from './order';
import { orders } from './orders-data';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor() {}

  getOrders(): Observable<IOrder[]> {
    return of(orders);
  }

  addOrder() {}

  editOrder() {}

  deleteOrder() {}
}
