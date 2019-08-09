/* eslint-disable require-jsdoc */
import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';

export default class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
    this.pickRandomNumber = this.pickRandomNumber.bind(this);
    this.addOption = this.addOption.bind(this);
    this.handleRemoveSingleOption = this.handleRemoveSingleOption.bind(this);
    this.state = {
      title: 'Indecision App',
      subTitle: 'Put your life in the hands of a computer',
      options: [],
    };
  }
  componentDidMount() {
    console.log('Component did mount');
  }
  componentDidUpdate() {
    console.log('Component did update');
  }
  pickRandomNumber() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[randomNum]);
  }
  addOption(option) {
    this.setState((prevState) => ({options: prevState.options.concat(option)}));
  }
  handleRemoveAll() {
    this.setState(() => ({options: []}));
  }
  handleRemoveSingleOption(option) {
    this.setState((prevState) => ({
      options: prevState.options.filter((word) => word !== option),
    }));
  }
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
