import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { StorageService } from '../../storage/storage.service';

@Injectable({
  providedIn: 'root',
})
export class LoggedInGuard implements CanLoad, CanActivate {
  constructor(private storageService: StorageService, private router: Router) {}
  canActivate(): Observable<boolean> {
    const user = this.storageService.getItem('user');
    if (user) {
      this.router.navigate(['/orders']);
      return of(false);
    } else {
      return of(true);
    }
  }
  canLoad(): Observable<boolean> {
    const user = this.storageService.getItem('user');
    if (user) {
      this.router.navigate(['/orders']);
      return of(false);
    } else {
      return of(true);
    }
  }
}
