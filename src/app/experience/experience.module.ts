import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExperiencePageRoutingModule } from './experience-routing.module';

import { ExperiencePage } from './experience.page';
import { TemplatesModule } from '../templates/templates.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExperiencePageRoutingModule,
	TemplatesModule
  ],
  declarations: [ExperiencePage]
})
export class ExperiencePageModule {}
