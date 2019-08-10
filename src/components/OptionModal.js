/* eslint-disable arrow-parens */
/* eslint-disable react/prop-types */
import React from 'react';
import Modal from 'react-modal';
const OptionModal = props => {
  return (
    <div>
      <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.clearSelectedOption}
        contentLabel='Hello You'
      >
        <h3>Selected Option</h3>
        <p>{props.selectedOption}</p>
        <button onClick={props.clearSelectedOption}>Okay</button>
      </Modal>
    </div>
  );
};
export default OptionModal;
