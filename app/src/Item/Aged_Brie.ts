import {Item} from "../gilded-rose";

export class Aged_Brie extends Item {
    public NewValues(): void {
        this.OnlyUpdateSellIn();
        if (this.sellIn < 0){ // Cambiar a menor o igual de ser necesario
            this.QualityUpgrade();
            this.QualityUpgrade();
        }
        else {
            this.QualityUpgrade();
        }
    }
}