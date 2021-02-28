import { getGreatCircleDistance } from '../src/utils/distanceCalculator';
import { Location } from '../src/models';

test('GCD can be calculated from two points', () => {
    const a = new Location(0.0, 0.0);
    const b = new Location(51.92893, 10.27699);
    const result = getGreatCircleDistance(a, b);

    //verified with https://www.gpsvisualizer.com/calculators
    expect(result.toFixed(0)).toBe('5853906');
});

test('GCD can be calculated from the same two points', () => {
    const a = new Location(51.92893, 10.27699);
    const b = new Location(51.92893, 10.27699);
    const result = getGreatCircleDistance(a, b);

    expect(result).toBe(0);
});

test('GCD can be calculated from negative numbers', () => {
    const a = new Location(0.0, 0.0);
    const b = new Location(-51.92893, -10.27699);
    const result = getGreatCircleDistance(a, b);

    //verified with https://www.gpsvisualizer.com/calculators
    expect(result.toFixed(0)).toBe('5853906');
});