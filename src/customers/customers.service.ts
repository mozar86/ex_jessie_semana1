import { Injectable, NotFoundException } from '@nestjs/common';
import { Customer } from './customers.entity';

@Injectable()
export class CustomersService {
  private customers: Customer[] = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      age: 25,
    },
    {
      id: 3,
      firstName: 'Alice',
      lastName: 'Johnson',
      age: 40,
    },
  ];

  create(bodyRequest: { firstName: string; lastName: string; age: number }) {
    const newCustomer = { ...bodyRequest, id: 4 };
    this.customers.push(newCustomer);
    return bodyRequest;
  }

  findAll(age?: number) {
    if (age) {
      const filteredCustomers = this.customers.filter(
        (customer) => customer.age === age,
      );
      if (filteredCustomers.length === 0) {
        throw new NotFoundException('Nenhum cliente com essa idade no banco');
      }
      return filteredCustomers;
    }
    return this.customers;
  }
}
