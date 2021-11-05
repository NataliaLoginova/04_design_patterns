import { State } from "./State";
import { Shipment } from "./Shipment";
import { Shipper } from "./Shipper";

export class Oversize {
    state: State;
    shipment: Shipment;
    constructor(state: State, shipper: Shipper) {
        this.state = state;
        this.shipment = new Shipment(state, shipper)
    }

    setShipper(shipper: Shipper) {
        this.shipment.setShipper(shipper);
    }

    getCostShipper(weight: number): number {
        return this.shipment.getCostShipper(weight);
    }

    ship(): string {
        const str = this.shipment.ship();
        const cost = this.getCostShipper(this.state.weight);
        return `${str} ${this.state.weight * cost}`;
    }
}
