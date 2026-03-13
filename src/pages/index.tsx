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
              <Translate id="homepage.bottom.eyebrow">文档规划</Translate>
            </p>
            <h2>
              <Translate id="homepage.bottom.title">后续内容可以直接在这个站点持续扩展</Translate>
            </h2>
            <p>
              <Translate id="homepage.bottom.body">
                站点已经预留文档、博客和 GitHub Releases 下载入口。后续你只需要新增 Markdown
                文档和版本日志，不需要再维护两套官网体系。
              </Translate>
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default HomePage;
