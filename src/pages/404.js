import React from 'react';
import { Link } from 'gatsby';

// styles
const pageStyles = {
  background: 'var(--dark)',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
};

const h1Styles = {
  display: 'inline-block',
  borderRight: '1px solid var(--slate)',
  margin: '0 20px 0 0',
  padding: '10px 23px 10px 0',
  fontSize: '24px',
  fontWeight: '500',
  verticalAlign: 'top',
};

const h2Content = {
  display: 'inline-block',
  textAlign: 'left',
  lineHeight: '49px',
  height: '49px',
  verticalAlign: 'middle',
};

const h2Styles = {
  fontSize: '14px',
  fontWeight: 'normal',
  lineHeight: 'inherit',
  margin: '0',
  padding: '0',
};

const btnHome = {
  backgroundColor: 'var(--navy-light)',
  borderRadius: '20px',
  margin: '20px 0 0 0',
  padding: '20px',
};

// markup
const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <title>Not found</title>
      <div>
        <h1 style={h1Styles}>404</h1>
        <div style={h2Content}>
          <h2 style={h2Styles}>This page could not be found</h2>
        </div>
      </div>
      <Link to='/' style={btnHome}>
        Go home
      </Link>
    </main>
  );
};

export default NotFoundPage;
