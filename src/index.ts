import config from 'config';

import { IAppConfig, ICustomer, Location } from './models';
import { findLocalCustomers } from './services/customers';
import { readCustomersFromFile, writeCustomersToFile } from './services/file';

const appConfig = config.get<IAppConfig>('config');

async function processCustomers() {
  const officeLocation = new Location(
    appConfig.input.location.latitude,
    appConfig.input.location.longitude
  );
  const customers: ICustomer[] = await readCustomersFromFile(
    appConfig.input.filePath
  );
  const localCustomers = await findLocalCustomers(officeLocation, customers);
  writeCustomersToFile(appConfig.output.filePath, localCustomers);
}

processCustomers();
