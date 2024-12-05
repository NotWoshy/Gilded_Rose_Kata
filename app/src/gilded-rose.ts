//import { Item } from "./Item/ItemPropierties";
import { Aged_Brie } from "./Item/Aged_Brie";
import { Backstage_Pass } from "./Item/Backstage_Pass";
import { Sulfuras } from "./Item/Sulfuras";
import { Conjured } from "./Item/Conjured";

export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name: string , sellIn : number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  public UpdateValues(): void {
    this.UpdateQuality();
  }
  
  public UpdateQuality(): void {

    if (this.sellIn == 0) { // Quality decreases twice as fast when sellIn value is 0
      if (this.quality == 0) {
        this.quality = 0;
      }
      else {
        this.quality = this.quality - 2;
      }
    }
    else {
       this.sellIn--; // Each day, sellIn value decreaces 
      this.quality--; // Each day, quality decreaces | QUALITY CAN'T BE NEGATIVE 
    }
  }

  public QualityUpgrade(): void { //For Aged Brie
    if (this.quality == 50) { // Max quality
      this.quality = this.quality += 0;
    }
    else {
      this.quality++;
    } 
  }

  public OnlyUpdateSellIn(): void {
    this.sellIn--;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    let i: number;
    for (i = 0;i<this.items.length;i++){
       let CurrentItem = this.items[i];
       CurrentItem.UpdateValues();
    }
    return this.items;
  }
    
}
