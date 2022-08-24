import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaveDComponent } from './wave-d.component';

describe('WaveDComponent', () => {
  let component: WaveDComponent;
  let fixture: ComponentFixture<WaveDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaveDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaveDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
