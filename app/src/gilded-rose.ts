//import { Item } from "./Item/ItemPropierties";
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
      this.quality = this.quality - 2;
    }
    else {
      this.sellIn = this.sellIn--; // Each day, sellIn value decreaces 
      this.quality = this.quality--; // Each day, quality decreaces | QUALITY CAN'T BE NEGATIVE 
    }
  }

  public QualityUpgrade(): void { //For Aged Brie
    if (this.quality == 50) { // Max quality
      this.quality = this.quality += 0;
    }
    else {
      this.quality = this.quality++;
    } 
  }

  public OnlyUpdateSellIn(): void {
    this.sellIn = this.sellIn--;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.items[i].quality > 0) {
          if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
            this.items[i].quality = this.items[i].quality - 1
          }
        }
      } else {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1
          if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1
              }
            }
          }
        }
      }
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != 'Aged Brie') {
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.items[i].quality = this.items[i].quality - 1
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1
          }
        }
      }
    }

    return this.items;
  }
}
