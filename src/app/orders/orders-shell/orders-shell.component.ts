import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IOrder } from '../order';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-orders-shell',
  templateUrl: './orders-shell.component.html',
  styleUrls: ['./orders-shell.component.scss'],
})
export class OrdersShellComponent implements OnInit {
  orders: IOrder[] = [];
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.orders = this.route.snapshot.data['resolvedOrdersData'];
  }
}