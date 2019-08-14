import React from 'react';
interface Ioption{
  option:string,
  index:number,
  handleRemoveSingleOption:(option:string)=>void
}
const Option:React.FC<Ioption> = props => {
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
