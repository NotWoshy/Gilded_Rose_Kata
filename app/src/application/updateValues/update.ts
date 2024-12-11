import { Item } from "@/src/domain/Item/itemPropierties";

export class update extends Item {
    
    public static updateValues (item:Item): void {
        item.NewValues();
    }
}