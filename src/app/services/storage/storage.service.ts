import { Injectable } from '@angular/core';
import { IUser } from 'src/app/auth/user';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string) {
    return localStorage.getItem(key);
  }

  deleteItem(key: string) {
    localStorage.removeItem(key);
  }
}
