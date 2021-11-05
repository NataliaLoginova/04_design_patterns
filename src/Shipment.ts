import { State } from "./State";
import { Shipper } from "./Shipper";

export class Shipment {
    state: State;
    shipper: Shipper;
    int = 0;

    constructor(state: State, shipper: Shipper) {
        this.state = state;
        this.shipper = shipper;
    }

    setShipper(shipper: Shipper) {
        this.shipper = shipper;
    }

    getCostShipper(weight: number): number {
        return this.shipper.getCost(weight);
    }

    getShipmentId(): string {
        this.int++;
        return this.int.toString();
    }

    ship(): string {
        return `Shipment with the ID ${this.getShipmentId()} will be picked up from: ${this.state.fromAddress} and shipped to: ${this.state.toAddress}`;
    }

}
