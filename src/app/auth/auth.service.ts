import { Injectable } from '@angular/core';
import { BehaviorSubject, of, throwError } from 'rxjs';
import { StorageService } from '../services/storage/storage.service';
import { IUser } from './user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: IUser = {
    username: 'vaibhav',
    password: 'vaib1234',
  };
  selectedUserSource = new BehaviorSubject<IUser | null>(null);
  selectedUserChanges$ = this.selectedUserSource.asObservable();

  constructor(private storageService: StorageService) {
    // If user stored in localstorage
    const user = this.storageService.getItem('user');
    if (user) {
      this.selectedUserSource.next(JSON.parse(user));
    }
  }

  login(userCredentials: IUser) {
    if (
      userCredentials.username === this.user.username &&
      userCredentials.password === this.user.password
    ) {
      // Save user in local storage
      this.storageService.setItem('user', { username: this.user.username });
      this.selectedUserSource.next(userCredentials);
      return of(this.user);
    } else {
      return throwError(() => {
        const error = new Error('Invalid Credentials.');
        return error;
      });
    }
  }

  logout() {
    this.storageService.deleteItem('user');
    this.selectedUserSource.next(null);
  }
}
