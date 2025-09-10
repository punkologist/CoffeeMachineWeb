import { Component, signal } from '@angular/core';
import { CoffeeApiService } from './coffee-api.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [MatButtonModule]
})
export class HomeComponent {
  result = signal<{ message: string; prepared: Date | null }>({ message: '', prepared: null });

  constructor(private api: CoffeeApiService) {}

  brewCoffee() {
    this.api.brewCoffee().subscribe({
      next: (res: any) => this.result.set({
        message: res.message ?? '',
        prepared: res.prepared ? new Date(res.prepared) : null
      }),
      error: (err: { message: string; }) => this.result.set({
        message: 'Error: ' + err.message,
        prepared: null
      })
    });
  }
}
