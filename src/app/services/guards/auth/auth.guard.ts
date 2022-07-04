import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { StorageService } from '../../storage/storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad, CanActivate {
  constructor(private storageService: StorageService, private router: Router) {}
  canActivate(): Observable<boolean> {
    const user = this.storageService.getItem('user');
    if (user) {
      return of(true);
    } else {
      this.router.navigate(['auth/login']);
      return of(false);
    }
  }

  canLoad(): Observable<boolean> {
    const user = this.storageService.getItem('user');
    if (user) {
      return of(true);
    } else {
      this.router.navigate(['auth/login']);
      return of(false);
    }
  }
}
