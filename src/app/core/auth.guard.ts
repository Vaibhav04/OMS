import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { StorageService } from '../services/storage/storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  constructor(private storageService: StorageService, private router: Router) {}

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
