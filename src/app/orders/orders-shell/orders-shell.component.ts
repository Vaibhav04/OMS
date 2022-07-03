import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IOrder } from '../order';

@Component({
  selector: 'app-orders-shell',
  templateUrl: './orders-shell.component.html',
  styleUrls: ['./orders-shell.component.scss'],
})
export class OrdersShellComponent implements OnInit {
  orders: IOrder[] = [];
  showModal = false;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.orders = this.route.snapshot.data['resolvedOrdersData'];
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }
}
