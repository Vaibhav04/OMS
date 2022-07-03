import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { IOrder } from '../order';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-order-form-modal',
  templateUrl: './order-form-modal.component.html',
  styleUrls: ['./order-form-modal.component.scss'],
})
export class OrderFormModalComponent implements OnInit {
  @Input() formType: String = '';
  @Input() selectedOrder: IOrder = {
    id: 0,
    customerName: '',
    customerAddress: '',
    dueDate: '',
    price: 0,
    phone: '',
  };

  @Output() closeModal = new EventEmitter();
  icons = {
    faClose,
  };
  orderForm: FormGroup = this.fb.group({
    customerName: [this.selectedOrder.customerName],
    dueDate: [this.selectedOrder.dueDate],
    customerAddress: [this.selectedOrder.customerAddress],
    phone: [this.selectedOrder.phone],
    price: [this.selectedOrder.price],
  });
  constructor(private fb: FormBuilder, private orderService: OrdersService) {}

  ngOnInit(): void {
    if (this.formType === 'edit') {
      this.patchFormValues();
    }
  }

  patchFormValues() {
    this.orderForm.patchValue({
      customerName: this.selectedOrder.customerName,
      dueDate: this.selectedOrder.dueDate,
      customerAddress: this.selectedOrder.customerAddress,
      phone: this.selectedOrder.phone,
      price: this.selectedOrder.price,
    });
  }

  close() {
    this.closeModal.emit();
  }

  submitForm() {
    if (this.formType === 'edit') {
      this.editOrder();
    } else if (this.formType === 'add') {
      this.addOrder();
    }
  }

  addOrder() {
    console.log(this.orderForm.value);
    const order = {
      // This id can also result into an duplicated one because i am generating in frontend
      id: Math.ceil(Math.random() * 300),
      ...this.orderForm.value,
    };
    this.orderService.addOrder(order);
  }

  editOrder() {
    this.orderService.editOrder(this.selectedOrder.id, this.orderForm.value);
    this.close();
  }
}
