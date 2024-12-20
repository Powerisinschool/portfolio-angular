import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './features/home/home.module';
import { AboutModule } from './features/about/about.module';
import { TestimonialsModule } from './features/testimonials/testimonials.module';
import { ContactModule } from './features/contact/contact.module';
import { ProjectsModule } from './features/projects/projects.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    AboutModule,
    ProjectsModule,
    TestimonialsModule,
    ContactModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
