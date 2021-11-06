import { Shipper } from "./Shipper";

const COST = {
    Letter: 0.51,
    Package: 0.19,
    Oversized: 0.53
}

export class PacificParcelShipper extends Shipper {
    cost;
    constructor(typeShipment: string) {
        super();
        this.cost = COST[typeShipment];
    }

    getCost(weight: number): number {
        if (!this.cost) {
            throw new Error('Cost for such type of shipment is not defined');
        }
        return this.cost * weight;
    }

    getDescription(): string {
        return 'PACIFIC PARCEL SHIPPER';
    }
}
