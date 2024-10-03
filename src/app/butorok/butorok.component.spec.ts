import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButorokComponent } from './butorok.component';

describe('ButorokComponent', () => {
  let component: ButorokComponent;
  let fixture: ComponentFixture<ButorokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButorokComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButorokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
