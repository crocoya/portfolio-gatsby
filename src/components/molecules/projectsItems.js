import React from 'react';
import { FiFolder, FiGithub, FiLink } from 'react-icons/fi';

export const ProjectsItems = [
  {
    folder: <FiFolder />,
    site: {
      link: 'https://empowerwomen-nft.com',
      icon: <FiLink />,
    },
    title: 'Empower Women Planet',
    link: 'https://empowerwomen-nft.com',
    description:
      'For the realization of my last project, I was given the opportunity to work with a motivated team where I had to learn new technologies and a totally different world. Empower Women Planet is the first female NFT project that will integrate the metaverse.',
    techList: {
      techOne: 'React',
      techTwo: 'SCSS',
      techThree: 'Web3',
    },
  },
  {
    folder: <FiFolder />,
    github: {
      link: 'https://github.com/crocoya/pokechek',
      icon: <FiGithub />,
    },
    site: {
      link: 'https://pokechek.netlify.app/',
      icon: <FiLink />,
    },
    title: 'PokéChek',
    link: 'https://pokechek.netlify.app/',
    description:
      'An application which lists all the pokémons of season one and a particularity to post your own personalized pokémon, which will be saved in a firebase database.',
    techList: {
      techOne: 'React',
      techTwo: 'Material UI',
      techThree: 'Firebase',
    },
  },
  {
    folder: <FiFolder />,
    github: {
      link: 'https://github.com/WildCodeSchool/nts-js-202103-p3-frontend-getteamup',
      icon: <FiGithub />,
    },
    title: 'Get Team Up',
    link: 'https://github.com/WildCodeSchool/nts-js-202103-p3-frontend-getteamup',
    description:
      'A client project carried out as a team to create a human resources information system over a period of 3 weeks.',
    techList: {
      techOne: 'React',
      techTwo: 'CSS',
      techThree: 'MySQL',
    },
  },
  {
    folder: <FiFolder />,
    github: {
      link: 'https://github.com/crocoya/crocoya.fr',
      icon: <FiGithub />,
    },
    site: {
      link: 'https://crocoya.netlify.app',
      icon: <FiLink />,
    },
    title: 'Portfolio v1',
    link: 'https://crocoya.netlify.app',
    description:
      'My first portfolio, made during my training at the Wild Code School only in HTML CSS without framework to maximize SEO.',
    techList: {
      techOne: 'HTML',
      techTwo: 'CSS',
      techThree: 'JS',
    },
  },
];
