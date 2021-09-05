import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtSlideshowComponent } from './mt-slideshow.component';

describe('MtSlideshowComponent', () => {
  let component: MtSlideshowComponent;
  let fixture: ComponentFixture<MtSlideshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MtSlideshowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MtSlideshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
