import {Component, Input, OnInit} from '@angular/core';
import {Gear} from 'src/outfitter/gear';
import {Outfit} from 'src/outfitter/outfit';

/**
 * OutfitPanelComponent is a presentation component for displaying a single
 * Outfit. This will visually show all the items included in the outfit.
 */
@Component({
  selector: 'app-outfit-panel',
  templateUrl: './outfit-panel.component.html',
  styleUrls: ['./outfit-panel.component.scss']
})
export class OutfitPanelComponent implements OnInit {
  constructor() {}

  @Input() outfit?: Outfit;

  gear(): Gear[] {
    return this.outfit?.gear || [];
  }

  ngOnInit(): void {}
}
