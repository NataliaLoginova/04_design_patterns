
export abstract class Shipper {

    protected constructor() {
    }

    abstract getCost(weight: number): number;

}
