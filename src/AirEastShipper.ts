import { Shipper } from "./Shipper";

const COST = {
    Letter: 0.39,
    Package: 0.25,
    Oversized: {
        standart: 0.39,
        addition: 10
    }
}

export class AirEastShipper extends Shipper {
    cost;
    constructor(typeShipment: string) {
        super();
        this.cost = COST[typeShipment];
    }

    getCost(weight: number): number {
        if (!this.cost) {
            throw new Error('Cost for such type of shipment is not defined');
        }
        return this.cost && this.cost.addition ? this.cost.standart * weight + this.cost.addition : this.cost * weight;
    }

    getDescription(): string {
        return 'AIR EAST SHIPPER';
    }
}
