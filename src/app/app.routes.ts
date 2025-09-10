import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';

export const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', loadComponent: () => import('./home.component').then(m => m.HomeComponent) },
];
