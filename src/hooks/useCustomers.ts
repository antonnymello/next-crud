import { useEffect, useState } from 'react';
import CustomerCollection from '../backend/db/CustomerCollection';
import Customer from '../core/Customer';
import CustomerRepository from '../core/CustomerRepository';
import useVisibility from './useVisibility';

const useCustomers = () => {
  const repo: CustomerRepository = new CustomerCollection();

  const { showForm, showTable, formVisible, tableVisible } = useVisibility();

  const [customer, setCustomer] = useState<Customer>(Customer.empty());
  const [customers, setCustomers] = useState<Customer[]>([]);

  const getAll = () => {
    repo.getAll().then((customers) => {
      setCustomers(customers);
      showTable();
    });
  };

  useEffect(getAll, []);

  const selectCustomer = (customer: Customer) => {
    setCustomer(customer);
    showForm();
  };

  const deleteCustomer = async (customer: Customer) => {
    await repo.delete(customer);
    getAll();
  };

  const saveCustomer = async (customer: Customer) => {
    await repo.save(customer);
    getAll();
  };

  const createCustomer = () => {
    setCustomer(Customer.empty());
    showForm();
  };

  return {
    customer,
    customers,
    createCustomer,
    saveCustomer,
    deleteCustomer,
    selectCustomer,
    getAll,
    formVisible,
    tableVisible,
    showTable,
  };
};

export default useCustomers;
