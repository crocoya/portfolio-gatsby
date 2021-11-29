import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../organisms/menu';

const Layout = ({ children }) => {
  return (
    <div className='layout--container'>
      <Menu />
      <main className='layout--main'>{children}</main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
