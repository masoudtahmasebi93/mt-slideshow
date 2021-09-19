import { NgModule } from '@angular/core';
import { MtPortfolioComponent } from './mt-portfolio.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SwipeDirective } from './swipe.directive';
import { HeaderComponent } from './header.component';
import { NoSanitizePipe } from './no-sanitize.pipe';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    HeaderComponent,
    NoSanitizePipe,
    SwipeDirective,
    MtPortfolioComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [
    MtPortfolioComponent
  ]
})
export class MtPortfolioModule { }
