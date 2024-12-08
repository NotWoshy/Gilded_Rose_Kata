import {GildedRose} from '../app/src/gilded-rose';
import {Item} from "@/src/domain/Item/itemPropierties";
import {Aged_Brie} from "@/src/domain/Item/agedBrie"
import { Sulfuras } from '@/src/domain/Item/sulfuras';
import { Backstage_Pass } from '@/src/domain/Item/backstagePass';
import { Conjured } from '@/src/domain/Item/conjured';


console.log("OMGHAI!")

const items = [
  new Item("+5 Dexterity Vest", 10, 20), //
  new Aged_Brie("Aged Brie", 2, 0), //
  new Item("Elixir of the Mongoose", 5, 7), //
  new Sulfuras("Sulfuras, Hand of Ragnaros", 0, 80), //
  new Sulfuras("Sulfuras, Hand of Ragnaros", -1, 80),
  new Backstage_Pass("Backstage passes to a TAFKAL80ETC concert", 15, 20),
  new Backstage_Pass("Backstage passes to a TAFKAL80ETC concert", 10, 49),
  new Backstage_Pass("Backstage passes to a TAFKAL80ETC concert", 5, 49),
  // this conjured item does not work properly yet
  new Conjured("Conjured Mana Cake", 3, 6)];


const gildedRose = new GildedRose(items);

let days: number = 2;
if (process.argv.length > 2) {
    days = +process.argv[2];
  }

for (let i = 0; i < days + 1; i++) {
  console.log("-------- day " + i + " --------");
  console.log("name, sellIn, quality");
  items.forEach(element => {
    console.log(element.name + ', ' + element.sellIn + ', ' + element.quality);

  });
  console.log();
  gildedRose.updateQuality();
}
