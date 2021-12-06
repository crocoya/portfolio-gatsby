import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { ToolboxItems } from '../molecules/svgItems';
import Atropos from 'atropos/react';

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
            become a web developer at the{' '}
            <a href='https://www.wildcodeschool.com/fr-FR'>Wild Code School</a>,
            and I was able to acquire many skills. My goal today is to be able
            to acquire a lot more skills in the field by offering my services as
            a freelance.
          </p>
          <p>
            I recently started a mission to create a{' '}
            <a href='https://empowerwomen-nft.com'>website</a> by integrating
            functionalities related to the world of blockchain and NFTs for a
            client.
          </p>
        </div>
        <div className='about--pic'>
          <StaticImage
            src='../../images/pp-yassine.png'
            alt='my profil'
            width={300}
            height={300}
          />
        </div>
      </div>
      <div className='about--skills'>
        <h2 className='subtitle'>My Toolbox</h2>
        <div className='toolbox--container'>
          <ul>
            {ToolboxItems.map((item, i) => (
              <Atropos
                highlight={false}
                shadow={false}
                rotateTouch={false}
                onEnter={() => console.log('enter')}
                key={i}
              >
                <li data-atropos-offset='0'>
                  <div data-atropos-offset='10'>{item.icon}</div>
                  <span data-atropos-offset='-5'>{item.title}</span>
                </li>
              </Atropos>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
