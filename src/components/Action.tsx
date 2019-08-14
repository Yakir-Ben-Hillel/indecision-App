/* eslint-disable arrow-parens */
/* eslint-disable react/prop-types */
import React from 'react';
interface ActionProps {
  isEmpty: boolean;
  pickRandomNumber: () => void;
}
const Action: React.FC<ActionProps> = props => {
  return (
    <div>
      <button
        className='big-button'
        disabled={!props.isEmpty}
        onClick={props.pickRandomNumber}
      >
        What should I do?
      </button>
    </div>
  );
};
export default Action;
