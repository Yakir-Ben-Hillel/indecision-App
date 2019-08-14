/* eslint-disable arrow-parens */
/* eslint-disable react/prop-types */
import React from 'react';
import Logos from './logos';
interface Iheader {
  title: string;
  subTitle: string;
}
const Header: React.FC<Iheader> = props => {
  return (
    <div className='header'>
      <div className='container'>
        <div>
          {' '}
          <h1 className='header__title'>
            {props.title}
            {<Logos />}
          </h1>
          <h2 className='header__subtitle'>{props.subTitle}</h2>
        </div>
      </div>
    </div>
  );
};
export default Header;
