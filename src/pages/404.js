import React from 'react';
import { Link } from 'gatsby';

const NotFoundPage = () => {
  return (
    <section className='main--notfound'>
      <title>Not found</title>
      <div className='content--notfound'>
        <h1>404</h1>
        <div>
          <h2>This page could not be found</h2>
        </div>
      </div>
      <Link to='/'>Go home</Link>
    </section>
  );
};

export default NotFoundPage;
