import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CoffeeApiService {
  constructor(private http: HttpClient) {}

  brewCoffee() {
    return this.http.get('/api/brew-coffee');
  }
}
