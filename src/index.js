/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
import React from 'react';
import ReactDOM from 'react-dom';
// SImple options
class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision App';
    const subTitle = 'Put your life in the hands of a computer';
    const options = ['Option one', 'Option two', 'Option three'];

    return (
      <div>
        <Header title={title} subTitle={subTitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subTitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        {this.props.options.map((option) => (
          <Option key={option} option={option} />
        ))}
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        <text>{this.props.option}</text>
      </div>
    );
  }
}

class AddOption extends React.Component {
  render() {
    return <div>AddOption component here</div>;
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('root'));
