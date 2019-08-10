/* eslint-disable object-curly-spacing */
/* eslint-disable comma-dangle */
/* eslint-disable arrow-parens */
/* eslint-disable require-jsdoc */
import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
  state = {
    title: 'Indecision App',
    subTitle: 'Put your life in the hands of a computer',
    options: [],
    selectedOption: undefined
  };
  componentDidMount = () => {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      // do nothing
    }
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  };
  componentWillUnmount = () => {
    console.log('componentWillUnmount');
  };
  clearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };
  pickRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({ selectedOption: option }));
  };
  addOption = option => {
    this.setState(prevState => ({ options: prevState.options.concat(option) }));
  };
  handleRemoveAll = () => {
    this.setState(() => ({ options: [] }));
  };
  handleRemoveSingleOption = option => {
    this.setState(prevState => ({
      options: prevState.options.filter(word => word !== option)
    }));
  };

  render() {
    return (
      <div>
        <Header title={this.state.title} subTitle={this.state.subTitle} />
        <div className='container'>
          <Action
            isEmpty={this.state.options.length > 0}
            pickRandomNumber={this.pickRandomNumber}
          />
          <div className='widget'>
            <Options
              options={this.state.options}
              isEmpty={this.state.options.length > 0}
              handleRemoveAll={this.handleRemoveAll}
              handleRemoveSingleOption={this.handleRemoveSingleOption}
            />
            <AddOption
              options={this.state.options}
              addOption={this.addOption}
            />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          clearSelectedOption={this.clearSelectedOption}
        />
      </div>
    );
  }
}
