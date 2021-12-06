import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../components/organisms/menu';
import SocialLeft from '../components/organisms/social--left';
import SocialRight from '../components/organisms/social--right';
import Copyright from '../components/organisms/copyright';

const Layout = ({ children }) => {
  return (
    <div className='layout--container'>
      <Menu />
      <SocialLeft />
      <SocialRight />
      <main className='layout--main'>{children}</main>
      <Copyright />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
