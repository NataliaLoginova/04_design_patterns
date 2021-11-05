import { Shipment } from "./Shipment";
import { Gui } from "./Gui";
import { AirEastShipper } from "./AirEastShipper";
import { ChicagoSprintShipper } from "./ChicagoSprintShipper";
import { PacificParcelShipper } from "./PacificParcelShipper";
import { Letter } from "./Letter";
import { Package } from "./Package";
import { Oversize } from "./Oversize";
import { State } from "./State";

export class Client {
    state: State;
    shipment: Letter | Package | Oversize;
    constructor(gui: Gui) {
    }

    getShipper(typeShipment) {
        if (!this.state.fromZipCode || +this.state.fromZipCode.charAt(0) <= 3 ) {
            return new AirEastShipper(typeShipment);
        }
        if (this.state.fromZipCode && +this.state.fromZipCode.charAt(0) > 3 && +this.state.fromZipCode.charAt(0) <= 6 ) {
            return new ChicagoSprintShipper(typeShipment);
        }
        if (this.state.fromZipCode && +this.state.fromZipCode.charAt(0) > 7 && +this.state.fromZipCode.charAt(0) <= 9 ) {
            return new PacificParcelShipper(typeShipment);
        }
    }

    setShipment() {
        if (this.state.weight < 15) {
            this.shipment = new Letter(this.state, this.getShipper('Letter'));
        }
        if (this.state.weight > 15 && this.state.weight <= 160) {
            this.shipment = new Package(this.state, this.getShipper('Package'));
        }
        if (this.state.weight > 160) {
            this.shipment = new Oversize(this.state, this.getShipper('Oversized'));
        }

    }

    onShip(shipment: Letter | Package | Oversize): string {
        const ship = shipment.ship();
        console.log(ship, 'here is a ship');
        return ship;
    }

}
