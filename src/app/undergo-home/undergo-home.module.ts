import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UndergoHomePageRoutingModule } from './undergo-home-routing.module';

import { UndergoHomePage } from './undergo-home.page';
import { TemplatesModule } from '../templates/templates.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UndergoHomePageRoutingModule,
	TemplatesModule
  ],
  declarations: [UndergoHomePage]
})
export class UndergoHomePageModule {}
