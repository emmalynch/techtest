import { RADIUS_OF_EARTH_IN_M } from '../consts';
import { Location } from '../models';

/**
 * @func getGreatCircleDistance
 * Calculates the Great Circle Distance between two points, a & b.
 *
 * centralAngle = arccos(sin(lat1).sin(lat2) + cos(lat1).cos(lat2).cos(long1 - long2))
 * distance = radiusOfEarth.centralAngle
 *
 * @see https://en.wikipedia.org/wiki/Great-circle_distance
 *
 * @param {Location} a
 * @param {Location} b
 * @return {number} the distance in meters
 *
 */
export function getGreatCircleDistance(a: Location, b: Location): number {
  const aInRadians = a.toRadians();
  const bInRadians = b.toRadians();

  const x = Math.sin(aInRadians.latitude) * Math.sin(bInRadians.latitude);
  const y =
    Math.cos(aInRadians.latitude) *
    Math.cos(bInRadians.latitude) *
    Math.cos(aInRadians.longitude - bInRadians.longitude);

  const centralAngle = Math.acos(x + y);
  return RADIUS_OF_EARTH_IN_M * centralAngle;
}
