import {ComponentFixture} from '@angular/core/testing';
import {OutfitPanelComponent} from '../outfit-panel.component';

/**
 * Outfit Panel Harness is a test harness for interacting with the component
 * template of a Outfit Panel component.
 */
export class OutfitPanelHarness {
  constructor(readonly fixture: ComponentFixture<OutfitPanelComponent>) {}

  private get nativeElement(): HTMLElement {
    return this.fixture.nativeElement;
  }

  getGearItems(): NodeListOf<HTMLElement> {
    return this.nativeElement.querySelectorAll('li');
  }
}
