import {Gear} from './gear';

/**
 * Complete gear outfit.
 *
 * TODO: Should probably rework this to add/remove gear by Index, and have
 * hardcoded Slot -> Index map. That way users can add/remove specific slots.
 */
export class Outfit {
  constructor(
      public name = '',
      public gear: Gear[] = [],
  ) {}

  /** Adds the given Gear item to the Outfit. */
  add(gear: Gear): void {
    this.gear.push(gear);
  }

  /**
   * Removes the given Gear item from the Outfit.
   *
   * @param gear item to remove
   * @returns false if this Outfit does not contain the Item.
   */
  remove(gear: Gear): boolean {
    const idx = this.gear.findIndex((g) => g === gear);

    if (idx === -1) return false;

    this.gear.splice(idx, 1);
    return true;
  }

  /** Gear represents a valid outfit configuration. */
  get valid(): boolean {
    throw new Error('Unimplemented');
  }

  /** Total warmth bonus of the outfit. (when dry) */
  get warmth(): number {
    throw new Error('Unimplemented');
  }

  /** Total wind chill resistance of the outfit. (when dry) */
  get windChill(): number {
    throw new Error('Unimplemented');
  }

  /**
   * Average waterproof value of the outfit.
   *
   * Note that this value is used for general comparison. In reality each gear
   * item will gain wetness individually based on its waterproof value.
   */
  get waterproof(): number {
    throw new Error('Unimplemented');
  }

  /** Total protection provided by this outfit. */
  get protection(): number {
    throw new Error('Unimplemented');
  }

  /** Total mobility penalty suffered by this outfit. */
  get mobility(): number {
    throw new Error('Unimplemented');
  }

  /** Total weight of this outfit. */
  get weight(): number {
    throw new Error('Unimplemented');
  }

  /** True is any of gear is only available in Wintermute (Story Mode). */
  get wintermute(): boolean {
    throw new Error('Unimplemented');
  }

  /** Highest rarity of any item included in the outfit. */
  get maxRarity(): boolean {
    throw new Error('Unimplemented');
  }

  /**
   * True if all items of this outfit are available on Interloper difficulty.
   */
  get interloper(): boolean {
    throw new Error('Unimplemented');
  }
}
