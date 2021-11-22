import { FunctionComponent } from 'react';

interface Props {
  onClick?: () => void;
}

const PillButton: FunctionComponent<Props> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="bg-secondary1 text-white font-bold rounded-full py-2 px-4 sm:text-xl">
      {children}
    </button>
  );
};

export default PillButton;
