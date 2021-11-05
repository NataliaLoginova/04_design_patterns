import { Shipper } from "./Shipper";

const COST = {
    Letter: 0.42,
    Package: 0.20
}

export class ChicagoSprintShipper extends Shipper {
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

}
