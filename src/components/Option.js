/* eslint-disable react/prop-types */
/* eslint-disable arrow-parens */
import React from 'react';
const Option = props => {
  return (
    <div className='option'>
      <p id='option-paragraph'>{(props.index+1)+'. '+props.option}</p>
      <button
        className='button button--remove'
        onClick={() => {
          props.handleRemoveSingleOption(props.option);
        }}
      >
        Remove
      </button>
    </div>
  );
};
export default Option;
