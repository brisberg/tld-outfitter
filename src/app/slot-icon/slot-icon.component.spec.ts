import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotIconComponent } from './slot-icon.component';

describe('SlotIconComponent', () => {
  let component: SlotIconComponent;
  let fixture: ComponentFixture<SlotIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlotIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
