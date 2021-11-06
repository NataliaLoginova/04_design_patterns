import { IShipper } from "./IShipper";
import { Shipper } from "./Shipper";

export class ShipperDecorator implements IShipper {
    marks;
    protected wrappee: Shipper;

    constructor(shipper: Shipper, marks?: string[]) {
        this.wrappee = shipper;
        this.marks = marks;
    }

    getCost(weight: number) {
        return this.wrappee.getCost(weight);
    }

    getMarks(): string {
        let strMarks = '';
        this.marks.forEach((mark) => {
            strMarks = strMarks + `**${mark.toUpperCase()}** \n`
        })
        return strMarks;
    }

    getDescription(): string {
        return `${this.wrappee.getDescription()} \n ${this.getMarks()}`;
    }

}
