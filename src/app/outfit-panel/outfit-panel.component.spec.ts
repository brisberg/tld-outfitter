import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Outfit} from 'src/outfitter/outfit';
import {SimpleHat, SimpleJacket} from 'src/outfitter/testing/gear-data';

import {OutfitPanelComponent} from './outfit-panel.component';
import {OutfitPanelHarness} from './testing/outfit-panel.harness';

describe('OutfitPanelComponent', () => {
  let component: OutfitPanelComponent;
  let fixture: ComponentFixture<OutfitPanelComponent>;
  let harness: OutfitPanelHarness;

  beforeEach(async () => {
    await TestBed.configureTestingModule({declarations: [OutfitPanelComponent]})
        .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutfitPanelComponent);
    component = fixture.componentInstance;
    harness = new OutfitPanelHarness(fixture);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should default to an empty Gear array', () => {
    expect(harness.getGearItems().length).toEqual(0);
  });

  it('should display an icon for each Gear item', () => {
    component.outfit = new Outfit('', [SimpleHat, SimpleJacket]);
    fixture.detectChanges();

    const gearRows = harness.getGearItems();
    expect(gearRows.length).toEqual(2);
  });
});
