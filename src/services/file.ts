import fs from 'fs';
import { Customer, ICustomer } from '../models';

/**
 * @func readCustomersFromFile
 *
 * Reads an array of customers from a file formatted in JSON lines
 *
 * @param {string} filePath full or relative path to file on disk
 * @return {ICustomer[]} an unsorted array of customers
 */
export function readCustomersFromFile(filePath: string): ICustomer[] {
  const file = fs.readFileSync(filePath, 'utf-8');
  const customerData: ICustomer[] = [];

  file.split('\n').map(line => {
    const data = JSON.parse(line);
    customerData.push(
      new Customer(data.user_id, data.name, data.latitude, data.longitude)
    );
  });

  return customerData;
}

/**
 * @func writeCustomersToFile
 *
 * Writes an array of customers to a JSON lines file
 *
 * @param {string} filePath full or relative path to file on disk
 * @return {ICustomer[]} customer data to be written
 */
export function writeCustomersToFile(
  filePath: string,
  customers: ICustomer[]
): void {
  const options = {
    encoding: 'utf-8',
  };

  // convert customers to JSON lines format
  const formattedCustomers = customers
    .map(customer => {
      return JSON.stringify({
        latitude: customer.latitude.toString(),
        longitude: customer.longitude.toString(),
        name: customer.name,
        user_id: customer.userId,
      });
    })
    .join('\n');

  fs.writeFileSync(filePath, formattedCustomers, options);
}
