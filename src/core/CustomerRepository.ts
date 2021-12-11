import Customer from './Customer';

interface CustomerRepository {
  save(customer: Customer): Promise<Customer>;
  delete(customer: Customer): Promise<void>;
  getAll(): Promise<Customer[]>;
  getById(id: string): Promise<Customer>;
}

export default CustomerRepository;
