import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/components/home/home.component';
import { AboutComponent } from './features/about/components/about/about.component';
import { TestimonialsComponent } from './features/testimonials/components/testimonials/testimonials.component';
import { ContactComponent } from './features/contact/components/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'about', component: AboutComponent },
  // { path: 'projects', component: ProjectsComponent },
  // { path: 'testimonials', component: TestimonialsComponent },
  // { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }, // Redirect to home for unknown routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
