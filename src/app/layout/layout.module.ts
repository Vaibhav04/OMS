import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutComponent } from './layout/layout.component';
import { LayoutRoutingModule } from './layout-routing.module';

@NgModule({
  declarations: [NavbarComponent, LayoutComponent],
  imports: [CommonModule, LayoutRoutingModule],
})
export class LayoutModule {}
