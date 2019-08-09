import React from 'react';
const Option = props => {
  return (
    <div>
      <span>{props.option}</span>
      <button
        onClick={() => {
          props.handleRemoveSingleOption(props.option);
        }}
      >
        X
      </button>
    </div>
  );
};
export default Option;
