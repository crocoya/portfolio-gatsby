import React from 'react';
import { init } from 'ityped';

const HomeSection = () => {
  const textRef = React.useRef();

  React.useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      strings: ['Developer.', 'Freelance.'],
    });
  }, []);
  return (
    <section className='home container' id='home'>
      <p className='home--presentation'>Hi, my name is</p>
      <h1 className='home--name'>Yassine Tababi.</h1>
      <h3 className='home--job'>
        Front-end <i ref={textRef} />
      </h3>
      <p className='home--post'>
        I like making <span>fun</span>, interactive things with code. Currently,
        I am interested in blockchain by developing applications with{' '}
        <span>web3 library</span>.
      </p>
      <a
        href='/cv/cv-yassine-tababi.pdf'
        className='home--cv'
        target='_blank'
        rel='noreferrer'
      >
        Resume
      </a>
    </section>
  );
};

export default HomeSection;
