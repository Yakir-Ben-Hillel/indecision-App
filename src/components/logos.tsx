/* eslint-disable react/prop-types */
/* eslint-disable arrow-parens */
import React from 'react';
import githubLogo from '../pictures/github-logo.png';
import linkedInLogo from '../pictures/linkedin-icon.png';

const Logos = () => {
  return (
    <div className='logos'>
      <div id='github'>
        {' '}
        <a
          href='https://github.com/Yakir-Ben-Hillel'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            src={githubLogo}
            width='38'
            height='38'
            alt='  '
            title='Github account'
          />
        </a>
      </div>

      <div id='linkedin'>
        {' '}
        <a
          href='https://www.linkedin.com/in/yakir-ben-hillel-078334174/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            src={linkedInLogo}
            width='39'
            height='39'
            alt='  '
            title='linkedIn account'
          />
        </a>
      </div>
    </div>
  );
};
export default Logos;
