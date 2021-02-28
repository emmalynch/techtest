export interface ICustomer {
  readonly userId: number;
  readonly name: string;
  readonly latitude: number;
  readonly longitude: number;
}

export class Customer implements ICustomer {
  public userId: number;
  public name: string;
  public latitude: number;
  public longitude: number;

  constructor(
    userId: number,
    name: string,
    latitude: string,
    longitude: string
  ) {
    this.userId = userId;
    this.name = name;
    this.latitude = parseFloat(latitude);
    this.longitude = parseFloat(longitude);
  }
}
