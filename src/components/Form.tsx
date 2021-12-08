import { useState } from 'react';
import Customer from '../core/Customer';
import Button from './Button';
import Input from './Input';

interface FormProps {
  customer: Customer;
  customerChanged?: (customer: Customer) => void;
  canceled?: () => void;
}

const Form = (props: FormProps) => {
  const id = props.customer?.id;
  const [name, setName] = useState(props.customer?.name ?? '');
  const [age, setAge] = useState(props.customer?.age ?? 0);

  return (
    <div>
      {id ? <Input readOnly text='Code' value={id} className='mb-4' /> : false}
      <Input text='Name' value={name} onChange={setName} className='mb-4' />
      <Input text='Age' value={age} type='number' onChange={setAge} />
      <div className='flex justify-end mt-3'>
        <Button
          color='blue'
          className='mr-2'
          onClick={() => props.customerChanged?.(new Customer(name, +age, id))}
        >
          {id ? 'Update' : 'Create'}
        </Button>
        <Button onClick={props.canceled}>Cancel</Button>
      </div>
    </div>
  );
};

export default Form;
