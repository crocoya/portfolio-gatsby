import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../organisms/menu';
import SocialLeft from '../organisms/social--left';
import SocialRight from '../organisms/social--right';

const Layout = ({ children }) => {
  return (
    <div className='layout--container'>
      <Menu />
      <SocialLeft />
      <SocialRight />
      <main className='layout--main'>{children}</main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
