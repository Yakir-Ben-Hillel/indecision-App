/* eslint-disable arrow-parens */
/* eslint-disable react/prop-types */
import React from 'react';
import Modal from 'react-modal';
interface Imodal {
  selectedOption: string;
  clearSelectedOption: () => void;
}
const OptionModal: React.FC<Imodal> = props => {
  return (
    <div>
      <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.clearSelectedOption}
        contentLabel='Hello You'
        closeTimeoutMS={200}
        className='modal'
      >
        <h3 id='modal__title'>Selected Option</h3>
        <p id='modal__body'>{props.selectedOption}</p>
        <button className='button' onClick={props.clearSelectedOption}>
          Okay
        </button>
      </Modal>
    </div>
  );
};
export default OptionModal;
