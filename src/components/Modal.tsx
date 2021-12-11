import Button from './Button';

interface ModalProps {
  title: string;
  description: string;
  hrColor?: string;
  buttonText: string;
  buttonColor: string;
  isOpen: boolean;
  onClose: () => void;
}

const Modal = (props: ModalProps) => {
  const hrColor = props.hrColor ?? 'gray';

  return (
    <div
      className={`
    h-screen flex z-50
    justify-center items-center 
    bg-gray-900 bg-opacity-80
  `}
    >
      <div
        className={`
      flex flex-col h-1/3 w-1/3
    bg-gray-200 rounded-lg shadow-lg
      `}
      >
        <h1 className='text-3xl text-center my-6'>{props.title}</h1>
        <hr className={`border-2 border-${hrColor}-500 mx-8 -mt-4 mb-3`} />
        <p className='text-lg text-center p-4'> {props.description} </p>
        <div className='flex justify-end my-4'>
          <Button> Cancel </Button>
          <Button color={props.buttonColor} className='mx-3'>
            {props.buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
