import config from 'config';
import fs from 'fs';
import { Customer, IAppConfig } from '../src/models';
import { readCustomersFromFile, writeCustomersToFile } from '../src/services/file';

const testConfig = config.get<IAppConfig>('config');
const newFileName = `__tests__/resources/${Date.now().toString()}.txt`;

afterAll(() => {
    //cleanup output file
    writeCustomersToFile(testConfig.output.filePath, []);

    //delete new files
    fs.unlinkSync(newFileName);
});

test('Customers can be read from a file', () => {
    const result = readCustomersFromFile(testConfig.input.filePath);

    expect(result.length).toBe(2);
    expect(result[0] instanceof Customer).toBe(true);
});

test('An error is thrown if the file does not exist', () => {
    try {
        readCustomersFromFile("does/not/exist.txt")
    } catch (error) {
        expect(error.code).toEqual('ENOENT');
    }
    expect.assertions(1);
});

test('Customers can be written to a file, if it already exists', () => {
    const customer = new Customer(1, "Jane Doe", "51.92893", "10.27699");
    writeCustomersToFile(testConfig.output.filePath, [customer]);
    
    const result = readCustomersFromFile(testConfig.output.filePath);

    expect(result.length).toBe(1);
});

test('Customers can be written to a file, if it does not exist', () => {
    const customer = new Customer(1, "Jane Doe", "51.92893", "10.27699");
    writeCustomersToFile(newFileName, [customer]);

    const result = readCustomersFromFile(newFileName);

    expect(result.length).toBe(1);
});