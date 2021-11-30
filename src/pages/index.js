import React from 'react';
import Layout from '../components/layout/layout';
import AboutSection from '../components/organisms/about--section';
import HomeSection from '../components/organisms/home--section';
import ProjectsSection from '../components/organisms/projects--section';

// import style
import '../styles/index.scss';

const IndexPage = () => {
  return (
    <Layout>
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
    </Layout>
  );
};

export default IndexPage;
