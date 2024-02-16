import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    LandingComponent ,


  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    
  ]
})
export class LandingModule { }
