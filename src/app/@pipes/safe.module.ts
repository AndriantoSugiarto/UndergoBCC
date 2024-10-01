import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafehtmlPipe } from './safehtml.pipe';

@NgModule({
  declarations: [SafehtmlPipe],
  exports: [SafehtmlPipe],
  imports: [
    CommonModule
  ]
})
export class SafeModule { }
