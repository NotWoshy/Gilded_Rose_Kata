import { GildedRose} from '@/src/gilded-rose';
import {Item} from "@/src/Item/itemPropierties"

describe('Gilded Rose', () => {
  it('should foo', () => {
    const gildedRose = new GildedRose([new Item('fixme', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('fixme');
  });
});
