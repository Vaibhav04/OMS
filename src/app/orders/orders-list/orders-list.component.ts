import { Component, OnInit } from '@angular/core';
import { faEdit, faTrashCan } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss'],
})
export class OrdersListComponent implements OnInit {
  orders = Array(6);
  icons = {
    faEdit,
    faTrashCan
  };
  constructor() {}

  ngOnInit(): void {}
}
