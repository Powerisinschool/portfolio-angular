import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { appRoutes } from './app.routes';
// import { SomeService } from './core/some.service';

export const appConfig: ApplicationConfig = {
  providers: [
    // How each part of AppModule is translated:

    // BrowserModule is replaced by a set of default providers included
    // implicitly when using bootstrapApplication. No action needed.

    // RouterModule.forRoot(routes) becomes:
    provideRouter(appRoutes),

    // HttpClientModule becomes:
    provideHttpClient(),

    // Providers from the 'providers' array are simply copied over:
    // SomeService
  ]
};
