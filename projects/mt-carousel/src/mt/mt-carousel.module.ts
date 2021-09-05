import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MtCarouselComponent } from './mt-carousel.component';



@NgModule({
  declarations: [
    MtCarouselComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MtCarouselComponent
  ]
})
export class MtCarouselModule { }
