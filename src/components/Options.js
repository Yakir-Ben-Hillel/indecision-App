/* eslint-disable arrow-parens */
/* eslint-disable react/prop-types */
import React from 'react';
import Option from './Option';
const Options = props => {
  return (
    <div>
      {props.isEmpty && (
        <button onClick={props.handleRemoveAll}>Remove All</button>
      )}
      {props.options.map(option => (
        <Option
          key={option}
          handleRemoveSingleOption={props.handleRemoveSingleOption}
          option={option}
        />
      ))}
    </div>
  );
};

export default Options;
