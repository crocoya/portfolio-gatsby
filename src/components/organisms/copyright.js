import React from 'react';

// import icons
import { FiGithub, FiLinkedin } from 'react-icons/fi';

const Copyright = () => {
  return (
    <footer className='footer container'>
      <div className='footer--mobile'>
        <ul>
          <li className='social--items'>
            <a
              href='https://github.com/crocoya'
              target='_blank'
              rel='noreferrer'
            >
              <FiGithub />
            </a>
          </li>
          <li className='social--items'>
            <a
              href='https://www.linkedin.com/in/yassine-tababi/'
              target='_blank'
              rel='noreferrer'
            >
              <FiLinkedin />
            </a>
          </li>
        </ul>
      </div>
      <div className='footer--credit'>
        <a href='https://github.com/crocoya' target='_blank' rel='noreferrer'>
          <span>{new Date().getFullYear()} Crocoya</span> © All Rights Reserved
        </a>
      </div>
    </footer>
  );
};

export default Copyright;
