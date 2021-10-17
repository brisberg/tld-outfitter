import {Gear} from './gear';
import {Outfit} from './outfit';
import {SimpleHat, SimpleJacket} from './testing/gear-data';

describe('Outfit', () => {
  let outfit: Outfit;

  beforeEach(() => {
    outfit = new Outfit('');
  });

  xit('should be valid with the correct mix of item slots');
  xit('should be invalid with too many of one item type')

  it('should add a given Gear item', () => {
    const jacket = SimpleJacket;

    outfit.add(jacket);
    expect(outfit.gear).toEqual([jacket]);
  });

  it('should remove a given Gear item from the outfit', () => {
    outfit = new Outfit('', [SimpleJacket, SimpleHat]);

    const result = outfit.remove(SimpleHat);
    expect(outfit.gear).toEqual([SimpleJacket]);
    expect(result).toBeTrue();
  });

  it('should return false when removing gear outfit does not contain', () => {
    outfit = new Outfit('', [SimpleJacket]);

    const result = outfit.remove(SimpleHat);
    expect(outfit.gear).toEqual([SimpleJacket]);
    expect(result).toBeFalse();
  });

  describe('Wintermute', () => {
    it('should be true if any item is story limited', () => {
      outfit = new Outfit('', [SimpleJacket]);
      const storyHat: Gear = {...SimpleHat, wintermute: true};
      outfit.add(storyHat);

      expect(outfit.wintermute).toBeTrue();
    });

    it('should be false if no item is story limited', () => {
      outfit = new Outfit('', [SimpleJacket]);

      expect(outfit.wintermute).toBeFalse();
    });
  });

  describe('Interloper', () => {
    it('should be false if any item is unavailable in interloper', () => {
      outfit = new Outfit('', [SimpleJacket]);
      const advancedHat: Gear = {...SimpleHat, interloper: false};
      outfit.add(advancedHat);

      expect(outfit.interloper).toBeFalse();
    });

    it('should be true if all items are available in interloper', () => {
      outfit = new Outfit('', [SimpleJacket]);

      expect(outfit.interloper).toBeTrue();
    });
  });

  describe('MaxRarity', () => {
    xit('should return the max rarity of any item in the outfit');
  });

  describe('Warmth', () => {
    it('should return total warmth of Gear items', () => {
      outfit = new Outfit('', [SimpleJacket, SimpleHat]);

      const expectedWarmth = SimpleJacket.warmth + SimpleHat.warmth;
      expect(outfit.warmth).toEqual(expectedWarmth);
    });
  });

  describe('Mobility', () => {
    it('should return total mobility penalty of Gear items', () => {
      const item1: Gear = {...SimpleHat, mobility: -10};
      const item2: Gear = {...SimpleHat, mobility: -15};
      outfit = new Outfit('', [item1, item2]);

      const expectedMobility = item1.mobility + item2.mobility;
      expect(outfit.mobility).toEqual(expectedMobility);
    });
  });

  describe('Weight', () => {
    it('should return total mobility penalty of Gear items', () => {
      const item1: Gear = {...SimpleHat, weight: 1.5};
      const item2: Gear = {...SimpleHat, weight: 0.75};
      outfit = new Outfit('', [item1, item2]);

      const expectedWeight = item1.weight + item2.weight;
      expect(outfit.weight).toEqual(expectedWeight);
    });
  });

  describe('Windproof', () => {
    it('should return total wind chill resistance of outer Gear items', () => {
      const item1: Gear = {...SimpleJacket, windproof: 1.5};
      const item2: Gear = {...SimpleJacket, windproof: 0.75};
      outfit = new Outfit('', [item1, item2]);

      // Only the first jacket is the outer layer
      const expectedWindproof = item1.windproof;
      expect(outfit.windproof).toEqual(expectedWindproof);
    });
  });

  describe('Protection', () => {
    it('should return total protection rating of outer Gear items', () => {
      const item1: Gear = {...SimpleJacket, protection: 15};
      const item2: Gear = {...SimpleJacket, protection: 8};
      outfit = new Outfit('', [item1, item2]);

      // Only the first jacket is the outer layer
      const expectedProtection = item1.protection;
      expect(outfit.protection).toEqual(expectedProtection);
    });
  });

  describe('Waterproof', () => {
    it('should return waterproof rating of outer Gear items', () => {
      const item1: Gear = {...SimpleJacket, waterproof: 15};
      const item2: Gear = {...SimpleJacket, waterproof: 8};
      outfit = new Outfit('', [item1, item2]);

      // Only the first jacket is the outer layer
      const expectedWaterproof = item1.waterproof;
      expect(outfit.waterproof).toEqual(expectedWaterproof);
    });
  });
});
