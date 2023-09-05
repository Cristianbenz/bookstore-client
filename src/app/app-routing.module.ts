import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component').then(mod => mod.HomeComponent)
    },
    {
        path: "admin",
        loadChildren: () => import("./routes/admin-routes").then(mod => mod.routes)
    },
    
];