import React from 'react';

// import icons
import { FiGithub, FiLinkedin } from 'react-icons/fi';

const SocialLeft = () => {
  return (
    <div orientation='left' className='social--left'>
      <ul className='social--list'>
        <li className='social--items'>
          <a href='https://github.com/crocoya' target='_blank' rel='noreferrer'>
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
  );
};

export default SocialLeft;
