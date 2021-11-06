
export interface IShipper {
    getCost(weight: number);

    getDescription(): string;
}
