import {Item} from "./itemPropierties";

export class Conjured extends Item {
   public NewValues(): void {
      this.OnlyUpdateSellIn();
      if (this.sellIn < 0) {
         this.QualityDowngrade();
         this.QualityDowngrade();
      }
      else {
         this.QualityDowngrade();
      }
      
   } 
}