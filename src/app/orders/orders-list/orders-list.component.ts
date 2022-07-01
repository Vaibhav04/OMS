import { Component, Input, OnInit } from '@angular/core';
import { faEdit, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { IOrder } from '../order';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss'],
})
export class OrdersListComponent implements OnInit {
  @Input() orders: IOrder[] = [];
  icons = {
    faEdit,
    faTrashCan,
  };
  constructor() {}

  ngOnInit(): void {}

  editOrder(orderId: number) {
    // !TODO Open popup with order data
  }

  deleteOrder(orderId: number) {
    // !Todo Ask for confirmation before deleting order
  }
}
