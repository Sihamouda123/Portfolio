import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes'; // Importez `routes` depuis `app.routes.ts`

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)], // Configurez les routes ici
};