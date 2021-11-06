import { IShipper } from "./IShipper";

export abstract class Shipper implements IShipper {

    protected constructor() {
    }

    abstract getCost(weight: number);

    abstract getDescription(): string;

}
