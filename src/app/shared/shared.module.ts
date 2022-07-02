import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PopupComponent } from './UI/popup/popup.component';

@NgModule({
  declarations: [PopupComponent],
  imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule],
  exports: [ReactiveFormsModule, FontAwesomeModule, PopupComponent],
})
export class SharedModule {}
