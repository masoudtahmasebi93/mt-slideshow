import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtPortfolioComponent } from './mt-portfolio.component';

describe('MtPortfolioComponent', () => {
  let component: MtPortfolioComponent;
  let fixture: ComponentFixture<MtPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MtPortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MtPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
