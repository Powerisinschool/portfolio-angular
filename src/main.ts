import {AppComponent} from './app/app.component';
import {bootstrapApplication} from '@angular/platform-browser';
import {appConfig} from './app/app.config';

// Bootstrap the standalone AppComponent and pass in the configuration
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
