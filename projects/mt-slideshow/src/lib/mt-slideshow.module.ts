import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MtSlideshowComponent } from './mt-slideshow.component';



@NgModule({
  declarations: [
    MtSlideshowComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MtSlideshowComponent
  ]
})
export class MtSlideshowModule { }
