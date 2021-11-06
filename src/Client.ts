import { Gui } from "./Gui";
import { AirEastShipper } from "./AirEastShipper";
import { ChicagoSprintShipper } from "./ChicagoSprintShipper";
import { PacificParcelShipper } from "./PacificParcelShipper";
import { Letter } from "./Letter";
import { Package } from "./Package";
import { Oversize } from "./Oversize";
import { State } from "./State";
import { ShipperDecorator } from "./ShipperDecorator";

export class Client {
    state: State;
    shipment: Letter | Package | Oversize;
    constructor(gui: Gui) {
    }

    getShipper(typeShipment: string) {
        if (!this.state.fromZipCode || +this.state.fromZipCode.charAt(0) <= 3 ) {
            const airEastShipper = new AirEastShipper(typeShipment);
            return new ShipperDecorator(airEastShipper, this.state.marks);
        }
        if (this.state.fromZipCode && +this.state.fromZipCode.charAt(0) > 3 && +this.state.fromZipCode.charAt(0) <= 6 ) {
            const chicagoSprintShipper = new ChicagoSprintShipper(typeShipment);
            return new ShipperDecorator(chicagoSprintShipper, this.state.marks);
        }
        if (this.state.fromZipCode && +this.state.fromZipCode.charAt(0) > 7 && +this.state.fromZipCode.charAt(0) <= 9 ) {
            const pacificParcelShipper = new PacificParcelShipper(typeShipment);
            return new ShipperDecorator(pacificParcelShipper, this.state.marks);
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
