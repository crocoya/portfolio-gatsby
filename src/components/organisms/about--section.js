import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import { ToolboxItems } from '../data/svgItems';

const AboutSection = () => {
  return (
    <section className='about container' id='about'>
      <h2 className='about--heading'>About Me</h2>
      <div className='about--inner'>
        <div className='about--text'>
          <p>
            Hello, my name is Yassine and I enjoy creating things that live on
            the internet. My interest in development started from my early
            childhood when I decided to try and make a forum for a video game
            community, and a showcase site for a member of my family.
          </p>
          <p>
            Fast-forward to today, I had the opportunity to start training to
            become a web developer at the
            <a href='https://www.wildcodeschool.com/fr-FR'> Wild Code School</a>
            , and I was able to acquire many skills. My goal today is to be able
            to acquire a lot more skills in the field by offering my services as
            a freelance.
          </p>
          <p>
            I recently started a mission to create a{' '}
            <a href='https://empowerwomen-nft.com'>website</a> by integrating
            functionalities related to the world of blockchain and NFTs for a
            client based in Dubai.
          </p>
        </div>
        <div className='about--pic'>
          <div className='wrapper'>
            <StaticImage
              src='../../images/about-prog.svg'
              alt='my profil'
              width={380}
              height={270}
            />
          </div>
        </div>
      </div>
      <div className='about--skills'>
        <h2 className='subtitle'>My Toolbox</h2>
        <div className='toolbox--container'>
          <ul>
            {ToolboxItems.map((item, i) => (
              <li key={i}>
                <div>{item.icon}</div>
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
