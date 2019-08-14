/* eslint-disable object-curly-spacing */
/* eslint-disable comma-dangle */
/* eslint-disable arrow-parens */
/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React from 'react';

interface IaddOption {
  options: string[];
  addOption: (option: string) => void;
}
export default class AddOption extends React.Component<IaddOption> {
  handleAddOption = (e: any) => {
    e.preventDefault();
    const given = e.target.elements.option.value.trim();
    if (given) {
      // The user inserted an option.
      if (this.props.options.indexOf(given) === -1) {
        this.props.addOption(given);
      }
    }
    e.target.elements.option.value = null;
  };
  render() {
    return (
      <div>
        <form className='add-option' onSubmit={this.handleAddOption}>
          <input
            type='text'
            autoComplete='off'
            id='option-input'
            name='option'
            placeholder='Insert option'
          />
          <button className='button'>Add option</button>
        </form>
      </div>
    );
  }
}
