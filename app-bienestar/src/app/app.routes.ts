import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./paginas/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'crear-publicacion',
    loadComponent: () => import('./paginas/crear-publicacion/crear-publicacion.page').then( m => m.CrearPublicacionPage)
  },
];
