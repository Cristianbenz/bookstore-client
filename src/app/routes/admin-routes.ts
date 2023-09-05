import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import("../pages/admin/admin.component").then(mod => mod.AdminComponent),
        children: [
            {
                path: '',
                loadComponent: () => import("../components/admin-products/admin-products.component").then(mod => mod.AdminProductsComponent)
            },
            {
                path: 'users',
                loadComponent: () => import("../components/users/users.component").then(mod => mod.UsersComponent)
            }
        ]
    },
]