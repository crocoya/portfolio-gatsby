import React from 'react';
import { Link } from 'gatsby';

// markup
const NotFoundPage = () => {
  return (
    <main className='main--notfound'>
      <title>Not found</title>
      <div className='content--notfound'>
        <h1>404</h1>
        <div>
          <h2>This page could not be found</h2>
        </div>
      </div>
      <Link to='/'>Go home</Link>
    </main>
  );
};

export default NotFoundPage;
