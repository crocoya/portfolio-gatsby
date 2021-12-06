import React from 'react';
import Layout from '../components/layout/layout';
import AboutSection from '../components/organisms/about--section';
import ContactSection from '../components/organisms/contact--section';
import HomeSection from '../components/organisms/home--section';
import ProjectsSection from '../components/organisms/projects--section';

// import style
import 'atropos/atropos.css';
import '../styles/index.scss';

const IndexPage = () => {
  return (
    <Layout>
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </Layout>
  );
};

export default IndexPage;
