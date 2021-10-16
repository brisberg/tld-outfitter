import {Gear} from './gear';
import {Outfit} from './outfit';
import {SimpleHat, SimpleJacket} from './testing/gear-data';

describe('Outfit', () => {
  let outfit: Outfit;

  beforeEach(() => {
    outfit = new Outfit('');
  });

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
      return;
    });

    it('should be false if no item is story limited', () => {
      return;
    });
  });
});
