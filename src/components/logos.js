/* eslint-disable react/prop-types */
/* eslint-disable arrow-parens */
import React from 'react';
import githubLogo from '../pictures/github-logo.png';
import instagramLogo from '../pictures/instagram-logo.png';
import facebookLogo from '../pictures/facebook-logo.png';
import linkedInLogo from '../pictures/linkedin-icon.png';

const Logos = props => {
  return (
    <div className='logos'>
      <div id='facebook'>
        {' '}
        <a
          href='https://www.facebook.com/yakirbenhillel'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            src={facebookLogo}
            width='47'
            height='47'
            alt='  '
            title='Facebook account'
          ></img>
        </a>
      </div>

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
          ></img>
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
          ></img>
        </a>
      </div>

      <div id='instagram'>
        <a
          href='https://instagram.com/yakir_ben_hillel'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            src={instagramLogo}
            width='46'
            height='46'
            alt='   '
            title='Instagram account'
          ></img>
        </a>
      </div>
    </div>
  );
};
export default Logos;
