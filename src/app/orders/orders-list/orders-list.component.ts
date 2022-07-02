import { Component, Input, OnInit } from '@angular/core';
import { faEdit, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { IOrder } from '../order';
import { OrdersService } from '../orders.service';

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
  isPopupOpen = false;
  isModalOpen = false;
  selectedOrderId: number | undefined;
  selectedOrder: IOrder = {
    id: 0,
    customerName: '',
    customerAddress: '',
    dueDate: '',
    price: 0,
    phone: '',
  };

  constructor(private orderService: OrdersService) {}

  ngOnInit(): void {}

  editOrder(selectedOrder: IOrder) {
    this.selectedOrder = selectedOrder;
    this.toggleModal();
  }

  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }

  openPopup(orderId: number) {
    this.selectedOrderId = orderId;
    this.togglePopup();
  }

  togglePopup() {
    this.isPopupOpen = !this.isPopupOpen;
  }

  deleteOrder() {
    this.orderService.deleteOrder(this.selectedOrderId);
    this.togglePopup();
  }
}
