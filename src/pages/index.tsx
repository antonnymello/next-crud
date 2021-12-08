import { loadGetInitialProps } from 'next/dist/shared/lib/utils';
import { useState } from 'react';
import Button from '../components/Button';
import Form from '../components/Form';
import Layout from '../components/Layout';
import Table from '../components/Table';
import Customer from '../core/Customer';

export default function Home() {
  const [customer, setCustomer] = useState<Customer>(Customer.empty());
  const [visible, setVisible] = useState<'table' | 'form'>('table');

  const customers = [
    new Customer('Melissa', 2, '1'),
    new Customer('Larissa', 64, '2'),
    new Customer('Antonny', 25, '3'),
    new Customer('Gizya', 86, '4'),
    new Customer('Elcy', 179, '5'),
  ];

  const selectCustomer = (customer: Customer) => {
    setCustomer(customer);
    setVisible('form');
  };

  const deleteCustomer = (customer: Customer) => {
    console.log('Excluído :>> ', customer.name);
  };

  const saveCustomer = (customer: Customer) => {
    console.log('customer :>> ', customer);
    setVisible('table');
  };

  const newCustomer = () => {
    setCustomer(Customer.empty());
    setVisible('form');
  };

  return (
    <div
      className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white
    `}
    >
      <Layout title='Simple CRUD'>
        {visible === 'table' ? (
          <>
            <div className='flex justify-end'>
              <Button
                className='mb-4'
                color='green'
                onClick={() => newCustomer()}
              >
                New Customer
              </Button>
            </div>
            <Table
              customer={customers}
              selectedCustomer={selectCustomer}
              deletedCustomer={deleteCustomer}
            />
          </>
        ) : (
          <Form
            customer={customer}
            canceled={() => setVisible('table')}
            customerChanged={saveCustomer}
          />
        )}
      </Layout>
    </div>
  );
}
