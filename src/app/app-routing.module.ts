import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component').then(mod => mod.HomeComponent)
    },
    {
        path: "detail/:id",
        loadComponent: () => import("./pages/detail/detail.component").then(mod => mod.DetailComponent)
    },
    {
        path: "discounts",
        loadComponent: () => import("./pages/discounts/discounts.component").then(mod => mod.DiscountsComponent)
    },
    {
        path: "admin",
        loadChildren: () => import("./routes/admin-routes").then(mod => mod.routes)
    },
    {
        path: "profile",
        loadChildren: () => import("./routes/profile-routes").then(mod => mod.routes)
    },
];