import React from 'react';
import Layout from '@theme/Layout';
import HomeHero from '@site/src/components/HomeHero';
import FeatureSection from '@site/src/components/FeatureSection';
import TestimonialsSection from '@site/src/components/TestimonialsSection';

const HomePage: React.FC = () => {
  return (
    <Layout
      title="AK Assistant"
      description="AK Assistant 官网"
    >
      <HomeHero />
      <main>
        <FeatureSection />
        <TestimonialsSection />
      </main>
    </Layout>
  );
};

export default HomePage;
