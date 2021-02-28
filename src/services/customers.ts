import { MAX_DISTANCE_IN_M } from '../consts';
import { ICustomer, Location } from '../models';
import { getGreatCircleDistance } from '../utils/distanceCalculator';

/**
 * @func findLocalCustomers
 * Gets a list of customers within 100KM of given location.
 * Distance is calculated using GreatCircleDistance.
 *
 * @param {Location} officeLocation
 * @param {ICustomer[]} customers
 * @return {Promise<ICustomer[]>} a promise containing a list of customers, sorted by userID
 */
export async function findLocalCustomers(
  officeLocation: Location,
  customers: ICustomer[]
): Promise<ICustomer[]> {
  const filteredCustomers = customers
    .filter(customer => {
      const customerLocation = new Location(
        customer.latitude,
        customer.longitude
      );
      const distance = getGreatCircleDistance(officeLocation, customerLocation);
      return distance <= MAX_DISTANCE_IN_M;
    })
    .sort((a, b) => a.userId - b.userId);

  return filteredCustomers;
}
