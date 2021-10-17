/** Single piece of equippable gear. */
export interface Gear {
  /** In-game  */
  name: string;
  /** Clothing Slot */
  slot: Slot;
  /** Valid clothing layer. */
  layer: Layer;

  /** Degrees (C) of warmth provided. */
  warmth: number;
  /** Degrees (C) resistance to wind chill. */
  windproof: number;
  /** Resistance to water from storms. */
  waterproof: number;
  /** Physical protection. */
  protection: number;
  /** Percentage stamina loss.  */
  mobility: number;
  /** Weight in Kg. */
  weight: number;

  /** Only available in Wintermute Story mode. */
  wintermute: boolean;
  /** Availability and chance of spawning in higher tier locations. */
  rarity: number;
  /** Available in Interloper difficulty. */
  interloper: boolean;
}

/**
 * Availability and chance of spawning in higher tier locations.
 *
 * Subjective value.
 */
export enum Rarity {
  Common = 1,
  Uncommon,
  Rare,
}

/**
 * All clothing slots.
 */
export enum Slot {
  Head = 'head',
  Hands = 'hands',
  Coat = 'coat',
  Shirt = 'shirt',
  Pants = 'pants',
  Underpants = 'underpants',
  Socks = 'socks',
  Feet = 'feet',
  Accessory = 'accessory',
}

/**
 * Valid layer filters.
 */
export enum Layer {
  Any = 'any',
  Outer = 'outer',
  Inner = 'inner',
}
