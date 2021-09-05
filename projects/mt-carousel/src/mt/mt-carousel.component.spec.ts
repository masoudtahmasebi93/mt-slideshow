import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtCarouselComponent } from './mt-carousel.component';

describe('MtCarouselComponent', () => {
  let component: MtCarouselComponent;
  let fixture: ComponentFixture<MtCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MtCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MtCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
