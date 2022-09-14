import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoliowebComponent } from './portfolioweb.component';

describe('PortfoliowebComponent', () => {
  let component: PortfoliowebComponent;
  let fixture: ComponentFixture<PortfoliowebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfoliowebComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfoliowebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
