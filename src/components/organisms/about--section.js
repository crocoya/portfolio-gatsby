import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import {
  CssSvg,
  FirebaseSvg,
  GatsbySvg,
  GithubSvg,
  GitlabSvg,
  GitSvg,
  HtmlSvg,
  JavascriptSvg,
  MysqlSvg,
  ReactSvg,
  VscodeSvg,
} from '../data/svgItems';

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
              src='../../images/profil-yassine.png'
              alt='my profil'
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
      <div className='about--skills'>
        <h2 className='subtitle'>My Toolbox</h2>
        <div className='toolbox--container'>
          <ul>
            <li>
              <div>
                <HtmlSvg />
              </div>
              <span>HTML</span>
            </li>
            <li>
              <div>
                <CssSvg />
              </div>
              <span>CSS 3</span>
            </li>
            <li>
              <div>
                <JavascriptSvg />
              </div>
              <span>JavaScript</span>
            </li>
            <li>
              <div>
                <ReactSvg />
              </div>
              <span>React</span>
            </li>
            <li>
              <div>
                <GatsbySvg />
              </div>
              <span>Gatsby</span>
            </li>
            <li>
              <div>
                <FirebaseSvg />
              </div>
              <span>Firebase</span>
            </li>
            <li>
              <div>
                <MysqlSvg />
              </div>
              <span>MySQL</span>
            </li>
            <li>
              <div>
                <GitSvg />
              </div>
              <span>Git</span>
            </li>
            <li>
              <div>
                <GithubSvg />
              </div>
              <span>Github</span>
            </li>
            <li>
              <div>
                <GitlabSvg />
              </div>
              <span>Gitlab</span>
            </li>
            <li>
              <div>
                <VscodeSvg />
              </div>
              <span>Vs Code</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
