import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SocialShareComponent } from './components/social-share/social-share.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SocialShareComponent],
  imports: [CommonModule, RouterModule],
  providers: [],
  exports: [
    HeaderComponent,
    FooterComponent,
    SocialShareComponent,
    CommonModule,
  ],
})
export class SharedModule {}
