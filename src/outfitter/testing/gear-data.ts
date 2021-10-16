/** @fileoverview Concrete mock Gear instances for use in tests */

import {Gear, Layer, Slot} from '../gear';

/**
 * SimpleJacket is a Jacket slot item, non-story mode, available in interloper
 */
export const SimpleJacket: Gear = {
  name: 'Simple Jacket',
  slot: Slot.Coat,
  layer: Layer.Any,
  warmth: 2,
  windChill: 2,
  waterproof: 0,
  protection: 0,
  mobility: 0,
  weight: 2,
  wintermute: false,
  rarity: 0,
  interloper: true
};

/**
 * SimpleHat is a Jacket slot item, non-story mode, available in interloper
 */
export const SimpleHat: Gear = {
  name: 'Simple Hat',
  slot: Slot.Head,
  layer: Layer.Any,
  warmth: 2,
  windChill: 1,
  waterproof: 0,
  protection: 0,
  mobility: 0,
  weight: 0.25,
  wintermute: false,
  rarity: 0,
  interloper: true
};
