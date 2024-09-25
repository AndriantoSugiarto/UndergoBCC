import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
	NavbarComponent,
	FooterComponent
  ],
  imports: [
    CommonModule,
	IonicModule,
  ],
  exports: [
	NavbarComponent,
	FooterComponent
  ]
})
export class TemplatesModule { }
