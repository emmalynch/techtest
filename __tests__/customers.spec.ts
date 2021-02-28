import { Customer, Location } from '../src/models';
import { findLocalCustomers } from '../src/services/customers';

test('Customers within a certain distance can be found', async () => {
    const location = new Location(53.3437967,-6.2567603);
    const distantCustomer = new Customer(1, "Jane Doe", "51.92893", "10.27699");
    const closeCustomer = new Customer(2, "John Smith", "53.3437967", "-6.2567603");
    const testCustomers = [
        distantCustomer,
        closeCustomer
    ]
    const result = await findLocalCustomers(location, testCustomers);
    expect(result.length).toBe(1);
    expect(result[0].userId).toBe(closeCustomer.userId);
});


test('An empty array is returned when no customers are close enough', async() => {
    const location = new Location(53.3437967,-6.2567603);
    const distantCustomer = new Customer(1, "Jane Doe", "51.92893", "10.27699");
    const testCustomers = [
        distantCustomer
    ]
    const result = await findLocalCustomers(location, testCustomers);
    expect(result.length).toBe(0);
});

test('Customers are sorted by userId', async () => {
    const location = new Location(53.3437967,-6.2567603);
    const customer1 = new Customer(1, "Jane Doe", "53.3437967", "-6.2567603");
    const customer2 = new Customer(2, "John Smith", "53.3437967", "-6.2567603");
    const testCustomers = [
        customer2,
        customer1
    ]
    const result = await findLocalCustomers(location, testCustomers);
    expect(result.length).toBe(2);
    expect(testCustomers[0].userId).toBe(customer2.userId);
    expect(testCustomers[1].userId).toBe(customer1.userId);
    expect(result[0].userId).toBe(customer1.userId);
    expect(result[1].userId).toBe(customer2.userId);
});
