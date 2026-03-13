import React from 'react';
import Layout from '@theme/Layout';
import Translate from '@docusaurus/Translate';
import HomeHero from '@site/src/components/HomeHero';
import FeatureSection from '@site/src/components/FeatureSection';

const HomePage: React.FC = () => {
  return (
    <Layout
      title="AK Assistant"
      description="AK Assistant 官网，统一承载产品介绍、文档与 GitHub Releases 下载入口"
    >
      <HomeHero />
      <main>
        <FeatureSection />
        <section className="container homepage-bottomSection">
          <div className="homepage-bottomCard">
            <p className="homepage-bottomEyebrow">
              <Translate id="homepage.bottom.eyebrow">文档与下载</Translate>
            </p>
            <h2>
              <Translate id="homepage.bottom.title">统一获取产品介绍、文档与最新版本</Translate>
            </h2>
            <p>
              <Translate id="homepage.bottom.body">
                官网提供稳定的下载入口、基础使用文档与更新日志，便于新用户快速上手，也便于持续发布版本说明。
              </Translate>
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default HomePage;
