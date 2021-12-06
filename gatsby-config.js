module.exports = {
  siteMetadata: {
    siteUrl: 'https://yassine-tababi.netlify.app',
    title: 'Yassine Tababi | Crocoya',
    description:
      "My name is Yassine and I enjoy creating things that live on the internet. I'm Developer Freelance !",
    keywords: `web,site,developer,javascript,react,mobile,dev,firebase,web3,front-end`,
    author: 'Crocoya',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#001514`,
        theme_color: `#001514`,
        display: `standalone`,
        icon: `src/images/laptopcode-removebg.png`,
      },
    },
  ],
};
