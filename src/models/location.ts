export interface ILocation {
  readonly latitude: number;
  readonly longitude: number;
  toRadians(): ILocation;
}

export class Location implements ILocation {
  public latitude: number;
  public longitude: number;

  constructor(latitude: number, longitude: number) {
    this.latitude = latitude;
    this.longitude = longitude;
  }

  /**
   * Returns a new Location, expressed in Radians
   */
  public toRadians(): Location {
    return new Location(
      this.latitude * (Math.PI / 180),
      this.longitude * (Math.PI / 180)
    );
  }
}
