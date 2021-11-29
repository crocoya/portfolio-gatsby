import React from 'react';

const HomeSection = () => {
  return (
    <section className='home container'>
      <p className='home--presentation'>Hi, my name is</p>
      <h1 className='home--name'>Yassine Tababi.</h1>
      <h3 className='home--job'>Front-end Developer</h3>
      <p className='home--post'>
        I like making fun, interactive things with code. Currently, I am
        interested in blockchain by developing applications with{' '}
        <span>web3 library</span>.
      </p>
      <a href='/#' className='home--cv' target='_blank' rel='noreferrer'>
        Resume
      </a>
    </section>
  );
};

export default HomeSection;
