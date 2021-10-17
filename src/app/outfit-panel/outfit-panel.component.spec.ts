import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Outfit} from 'src/outfitter/outfit';
import {SimpleHat, SimpleJacket} from 'src/outfitter/testing/gear-data';

import {OutfitPanelComponent} from './outfit-panel.component';

describe('OutfitPanelComponent', () => {
  let component: OutfitPanelComponent;
  let fixture: ComponentFixture<OutfitPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({declarations: [OutfitPanelComponent]})
        .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutfitPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should default to an empty Gear array', () => {
    expect(component.gear()).toEqual([]);
  });

  it('should display an icon for each Gear item', () => {
    component.outfit = new Outfit('', [SimpleHat, SimpleJacket]);
    fixture.detectChanges();

    const gearRows = fixture.nativeElement.querySelectorAll('li');
    expect(gearRows.length).toEqual(2);
  });
});
