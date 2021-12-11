import Button from '../components/Button';
import Form from '../components/Form';
import Layout from '../components/Layout';
import Table from '../components/Table';
import useCustomers from '../hooks/useCustomers';

export default function Home() {
  const {
    customer,
    customers,
    saveCustomer,
    selectCustomer,
    deleteCustomer,
    createCustomer,
    tableVisible,
    showTable,
  } = useCustomers();

  return (
    <div
      className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white
    `}
    >
      <Layout title='Simple CRUD'>
        {tableVisible ? (
          <>
            <div className='flex justify-end'>
              <Button
                className='mb-4'
                color='green'
                onClick={() => createCustomer()}
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
            canceled={() => showTable()}
            customerChanged={saveCustomer}
          />
        )}
      </Layout>
    </div>
  );
}
