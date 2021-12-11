import Modal from '../components/Modal';

const test = () => {
  return (
    <Modal
      title='Tem certeza que deseja continuar?'
      description='Ao remover você não terá mais acesso aos dados do usuário.'
      hrColor='red'
      buttonColor='red'
      buttonText='Remove'
      isOpen={true}
      onClose={() => {}}
    />
  );
};

export default test;
