import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../services/guards/auth/auth.guard';
import { LoggedInGuard } from '../services/guards/logged-in/logged-in.guard';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full',
      },
      {
        path: 'auth',
        // Activate route only if authorized
        canActivate: [LoggedInGuard],
        // Load module only if authorized
        canLoad: [LoggedInGuard],
        
        loadChildren: () =>
          import('../auth/auth.module').then((m) => m.AuthModule),
      },
      {
        path: 'orders',
        canActivate: [AuthGuard],
        canLoad: [AuthGuard],
        loadChildren: () =>
          import('../orders/orders.module').then((m) => m.OrdersModule),
      },
      {
        path: '**',
        redirectTo: 'auth',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
