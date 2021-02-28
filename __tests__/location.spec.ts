import { Location } from "../src/models"

test('Locations can be converted to radians', () => {
    const location = new Location(53.3437967,-6.2567603);
    const locationInRads = location.toRadians();

    expect(locationInRads.latitude.toFixed(7)).toBe("0.9310249");
    expect(locationInRads.longitude.toFixed(7)).toBe("-0.1092011");
});


