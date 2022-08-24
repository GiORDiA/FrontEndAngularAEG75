import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaveEComponent } from './wave-e.component';

describe('WaveEComponent', () => {
  let component: WaveEComponent;
  let fixture: ComponentFixture<WaveEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaveEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaveEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
