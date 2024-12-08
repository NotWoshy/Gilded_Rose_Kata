export class Item {
    name: string;
    sellIn: number;
    quality: number;
  
    constructor(name: string , sellIn : number, quality: number) {
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
    }
    
    public UpdateQuality(): void {
      if (this.sellIn <= 0) { // Quality decreases twice as fast when sellIn value is 0
        if (this.quality == 0) {
          this.sellIn--;
        }
        else {
          this.quality = this.quality - 2;
          this.sellIn--; 
        }
      }
      else {
         this.sellIn--; // Each day, sellIn value decreaces 
        this.quality--; // Each day, quality decreaces | QUALITY CAN'T BE NEGATIVE 
      }
    }
  
    public QualityUpgrade(): void { //For Aged Brie and Backstage
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

    public QualityDowngrade(): void {
      if (this.quality == 0) {
        this.quality = 0;
      }
      else {
        this.quality--;
      }
    }
  }
