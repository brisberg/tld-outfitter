import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Gear} from 'src/outfitter/gear';

/**
 * SlotIconComponent is for showing a single Gear Slot in an outfit.
 *
 * It will display the icon for the given Gear Item in the slot, and possibly
 * display any wetness or freezing that has applied to the item.
 */
@Component({
  selector: 'app-slot-icon',
  templateUrl: './slot-icon.component.html',
  styleUrls: ['./slot-icon.component.scss']
})
export class SlotIconComponent implements OnInit {
  constructor() {}

  @Input() gear: Gear|null = null;
  @Input() wetness: number = 0;
  @Input() freezing: number = 0;

  @Output() selected = new EventEmitter();

  ngOnInit(): void {}
}
