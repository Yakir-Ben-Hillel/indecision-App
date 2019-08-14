import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

interface Iindecision {
  options: string[];
  selectedOption: string;
}
export default class IndecisionApp extends React.Component {
  state: Iindecision = {
    options: [],
    selectedOption: ''
  };
  componentDidMount = () => {
    try {
      const json = localStorage.getItem('options');
      const options = json !== null ? JSON.parse(json) : '';
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      // do nothing
    }
  };
  componentDidUpdate = (prevProps: any, prevState: Iindecision) => {
    if (prevState) {
      if (prevState.options.length !== this.state.options.length) {
        const json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
      }
    }
  };
  clearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };
  pickRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option: string = this.state.options[randomNum];
    this.setState(() => ({ selectedOption: option }));
  };
  addOption = (option: string) => {
    this.setState((prevState: Iindecision) => ({
      options: prevState.options.concat(option)
    }));
  };
  handleRemoveAll = () => {
    this.setState(() => ({ options: [] }));
  };
  handleRemoveSingleOption = (option: string) => {
    this.setState((prevState: Iindecision) => ({
      options: prevState.options.filter((word: any) => word !== option)
    }));
  };

  render() {
    return (
      <div>
        <Header
          title={'Indecision App'}
          subTitle={'Put your life in the hands of a computer'}
        />
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
