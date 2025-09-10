import { Component, signal } from '@angular/core';
import { CoffeeApiService } from './coffee-api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <button (click)="brewCoffee()">Brew Coffee</button>
    @if (result()) {
      <div>{{ result() }}</div>
    }
  `,
  imports: []
})
export class HomeComponent {
  result = signal<string>('');

  constructor(private api: CoffeeApiService) {}

  brewCoffee() {
    this.api.brewCoffee().subscribe({
      next: (res: any) => this.result.set(JSON.stringify(res)),
      error: (err: { message: string; }) => this.result.set('Error: ' + err.message)
    });
  }
}
