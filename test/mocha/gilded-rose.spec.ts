import { expect } from 'chai';
import { GildedRose } from '@/src/gilded-rose';
import { Item } from '@/src/Item/ItemPropierties';

describe('Gilded Rose', () => {
  it('should foo', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal('fixme');
  });
});
