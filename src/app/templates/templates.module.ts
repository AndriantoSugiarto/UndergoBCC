import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
	NavbarComponent,
	FooterComponent
  ],
  imports: [
    CommonModule,
	IonicModule,
	RouterModule
  ],
  exports: [
	NavbarComponent,
	FooterComponent
  ]
})
export class TemplatesModule { }
