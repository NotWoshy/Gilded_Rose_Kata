import { Aged_Brie } from "./Item/agedBrie";
import {Item} from "./Item/itemPropierties";
import { Sulfuras } from './Item/sulfuras';
import { Backstage_Pass } from './Item/backstagePass';
import { Conjured } from './Item/conjured';

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    let i: number;
    for (i = 0;i<this.items.length;i++) {
       let CurrentItem = this.items[i];
       if (CurrentItem instanceof Aged_Brie) {
        CurrentItem.NewValues();
       }
       else if (CurrentItem instanceof Backstage_Pass) {
        CurrentItem.NewValues();
       }
       else if (CurrentItem instanceof Sulfuras) {
        CurrentItem.NewValues();
       }
       else if (CurrentItem instanceof Conjured) {
        CurrentItem.NewValues();
       }
       else if (CurrentItem instanceof Item) {
        CurrentItem.UpdateQuality();
       }
    }
    return this.items;
    }  
  } 
