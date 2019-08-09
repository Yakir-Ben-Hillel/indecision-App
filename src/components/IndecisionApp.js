/* eslint-disable object-curly-spacing */
/* eslint-disable comma-dangle */
/* eslint-disable arrow-parens */
/* eslint-disable require-jsdoc */
import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';

export default class IndecisionApp extends React.Component {
  state = {
    title: 'Indecision App',
    subTitle: 'Put your life in the hands of a computer',
    options: []
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
  pickRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[randomNum]);
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
        <Action
          isEmpty={this.state.options.length > 0}
          pickRandomNumber={this.pickRandomNumber}
        />
        <Options
          options={this.state.options}
          isEmpty={this.state.options.length > 0}
          handleRemoveAll={this.handleRemoveAll}
          handleRemoveSingleOption={this.handleRemoveSingleOption}
        />
        <AddOption options={this.state.options} addOption={this.addOption} />
      </div>
    );
  }
}
