import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-order-form-modal',
  templateUrl: './order-form-modal.component.html',
  styleUrls: ['./order-form-modal.component.scss'],
})
export class OrderFormModalComponent implements OnInit {
  @Output() closeModal = new EventEmitter();
  icons = {
    faClose,
  };
  orderForm: FormGroup = this.fb.group({
    customerName: [''],
    dueDate: [''],
    address: [''],
    phone: [''],
    orderTotal: [''],
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  close() {
    this.closeModal.emit();
  }

  addOrder() {}
}
