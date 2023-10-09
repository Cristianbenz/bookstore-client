import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import("../pages/profile/profile.component").then(mod => mod.ProfileComponent),
        children: [
            {
                path: '',
                loadComponent: () => import("../components/user-info/user-info.component").then(mod => mod.UserInfoComponent)
            },
            {
                path: 'history',
                loadComponent: () => import("../components/history/history.component").then(mod => mod.HistoryComponent)
            }
        ]
    },
]