/* eslint-disable arrow-parens */
/* eslint-disable react/prop-types */
import React from 'react';
const Action = props => {
  return (
    <div>
      <button disabled={!props.isEmpty} onClick={props.pickRandomNumber}>
        What should I do?
      </button>
    </div>
  );
};
export default Action;
