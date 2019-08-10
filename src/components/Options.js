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
