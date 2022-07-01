import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { OrdersService } from './orders.service';

@Injectable({
  providedIn: 'root',
})
export class OrdersResolver implements Resolve<boolean> {
  constructor(private orderService: OrdersService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.orderService.getOrders();
  }
}
