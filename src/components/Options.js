/* eslint-disable arrow-parens */
/* eslint-disable react/prop-types */
import React from 'react';
import Option from './Option';
const Options = props => {
  return (
    <div>
      <div className='widget-header'>
        <h3 id='list-options'>Your options:</h3>
        {props.isEmpty && (
          <button
            className='button button--remove'
            onClick={props.handleRemoveAll}
          >
            Remove All
          </button>
        )}
      </div>
      {!props.isEmpty && (
        <p id='massage'>Please add an option to get started!</p>
      )}
      {props.options.map((option, index) => (
        <Option
          key={option}
          index={index}
          handleRemoveSingleOption={props.handleRemoveSingleOption}
          option={option}
        />
      ))}
    </div>
  );
};

export default Options;
