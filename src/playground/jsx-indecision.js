// eslint-disable-next-line no-unused-vars
import React from 'react';
import ReactDOM from 'react-dom';
console.log('App.js is running!');

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: [],
};
const randomNum = Math.floor(Math.random() * app.options.length);
const onFormSubmit = (e) => {
  e.preventDefault();
  const given = e.target.elements.option.value;
  if (given) {
    app.options.push(given);
    e.target.elements.option.value = null;
  }
  render();
};
const PickAnOption = () => {
  alert(app.options[randomNum]);
};
const WipeArray = () => {
  app.options = [];
  render();
};
const appRoot = document.getElementById('root');
const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <ol>
        <button disabled={app.options.length === 0} onClick={PickAnOption}>
          What should i do?
        </button>
        <button disabled={app.options.length === 0} onClick={WipeArray}>
          Wipe All
        </button>
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        {app.options.map((string) => {
          return <p key={string}>{string}</p>;
        })}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Submit</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};
render();
