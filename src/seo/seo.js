import React from 'react';
import { Helmet } from 'react-helmet';

const Seo = () => {
  return (
    <Helmet
      meta={[
        { name: 'title', content: 'Yassine Tababi | Crocoya' },
        {
          name: 'description',
          content:
            "My name is Yassine and I enjoy creating things that live on the internet. I'm Developer Freelance !",
        },
        {
          property: 'og:title',
          content: 'Yassine Tababi | Crocoya',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Yassine Tababi | Crocoya' },
        { property: 'og:image', content: '/images/pp-yassine.png' },
        { property: `og:image:width`, content: '750' },
        { property: `og:image:height`, content: '940' },
        { property: `og:locale`, content: `en` },
        { name: 'robots', content: 'index, follow' },
        { name: 'google', content: 'notranslate' },
        { name: 'x-robots-tag', content: 'none' },
      ].concat()}
    />
  );
};

export default Seo;
