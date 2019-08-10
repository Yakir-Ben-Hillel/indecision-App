/* eslint-disable arrow-parens */
/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React from 'react';

export default class AddOption extends React.Component {
  handleAddOption = e => {
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
        <form onSubmit={this.handleAddOption}>
          <input type='text' name='option' placeholder='Insert option' />
          <button className='button'>Add option</button>
        </form>
      </div>
    );
  }
}
