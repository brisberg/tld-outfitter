import {Gear} from './gear';

/** Complete gear outfit. */
export class Outfit {
  constructor(
      public name = '',
      public gear: Gear[],
  ) {}

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
