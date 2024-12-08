import {Item} from "./domain/Item/itemPropierties";

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    let i: number;
    for (i = 0;i<this.items.length;i++) {
      let CurrentItem = this.items[i];
      CurrentItem.NewValues();
    }
    return this.items;
    }  
  } 
