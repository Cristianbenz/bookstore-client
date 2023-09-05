import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { AuthModule } from '@auth0/auth0-angular';

import { routes } from './app/app-routing.module';
import { RootComponent } from './app/root/root.component';
import { provideAnimations } from '@angular/platform-browser/animations';
bootstrapApplication(RootComponent, {
    providers: [
    provideRouter(routes),
    importProvidersFrom(AuthModule.forRoot({
        domain: 'dev-fh0h6dw5n0ppb24l.us.auth0.com',
        clientId: 'TVNRUYeCuvkDAUu5GJn8MvQv3pz1N15h',
        authorizationParams: {
            redirect_uri: window.location.origin
        }
    })),
    provideAnimations()
],

});
