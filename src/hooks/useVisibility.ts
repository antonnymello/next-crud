import { useState } from 'react';

const useVisibility = () => {
  const [visible, setVisible] = useState<'table' | 'form'>('table');

  const showTable = () => setVisible('table');
  const showForm = () => setVisible('form');

  return {
    formVisible: visible === 'form',
    tableVisible: visible === 'table',
    showTable,
    showForm,
  };
};

export default useVisibility;
