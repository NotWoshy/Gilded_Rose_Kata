import {Item} from "./itemPropierties";

export class Backstage_Pass extends Item {
    public NewValues(): void {
        this.OnlyUpdateSellIn();
        if (this.sellIn < 0){
            this.quality = 0;
        }
        else if (this.sellIn < 5) {
            this.QualityUpgrade();
            this.QualityUpgrade();
            this.QualityUpgrade();
        }
        else if (this.sellIn < 10) {
            this.QualityUpgrade();
            this.QualityUpgrade();
        }
        else {
            this.QualityUpgrade();
        }
    }
}