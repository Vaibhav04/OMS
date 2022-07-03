import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PopupComponent } from './UI/popup/popup.component';
import { LoaderComponent } from './UI/loader/loader.component';

@NgModule({
  declarations: [PopupComponent, LoaderComponent],
  imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule],
  exports: [
    ReactiveFormsModule,
    FontAwesomeModule,
    PopupComponent,
    LoaderComponent,
  ],
})
export class SharedModule {}
