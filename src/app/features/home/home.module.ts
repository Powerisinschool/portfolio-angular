import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { TabletComponent } from './components/tablet/tablet.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [HomeComponent, TabletComponent],
  providers: [],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
