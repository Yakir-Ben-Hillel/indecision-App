/* eslint-disable react/prop-types */
/* eslint-disable arrow-parens */
import React from 'react';
const Option = props => {
  return (
    <div>
      <span>{props.option}</span>
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
