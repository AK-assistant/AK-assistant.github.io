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
        <section className="container homepage-capabilitySection">
          <div className="homepage-capabilityHeader">
            <p className="homepage-bottomEyebrow">
              <Translate id="homepage.capabilities.eyebrow">为什么值得换用</Translate>
            </p>
            <h2>
              <Translate id="homepage.capabilities.title">不仅是更好看，而是更适合日常高频调试</Translate>
            </h2>
            <p>
              <Translate id="homepage.capabilities.body">
                从首次连接到长期使用，官网首页应该清楚回答一个问题：它和传统串口助手相比，为什么更值得成为你的默认工具。
              </Translate>
            </p>
          </div>
          <div className="homepage-capabilityGrid">
            <article className="homepage-capabilityCard">
              <h3>更快进入工作状态</h3>
              <p>减少等待与卡顿，把注意力留给设备联调和数据分析，而不是工具本身。</p>
            </article>
            <article className="homepage-capabilityCard">
              <h3>更一致的跨平台体验</h3>
              <p>在不同系统间切换时，交互习惯、视觉层次与使用路径保持统一，不需要反复适应。</p>
            </article>
            <article className="homepage-capabilityCard">
              <h3>更清晰的产品入口</h3>
              <p>官网、文档、下载与更新日志放在同一站点里，新用户更容易理解产品并完成首次安装。</p>
            </article>
          </div>
        </section>
        <section className="container homepage-bottomSection">
          <div className="homepage-bottomGrid">
            <div className="homepage-bottomCard">
              <p className="homepage-bottomEyebrow">
                <Translate id="homepage.bottom.downloadEyebrow">下载入口</Translate>
              </p>
              <h2>
                <Translate id="homepage.bottom.downloadTitle">直接获取最新版本</Translate>
              </h2>
              <p>
                <Translate id="homepage.bottom.downloadBody">
                  安装包统一通过 GitHub Releases 分发，适合直接下载、分发和版本追踪。
                </Translate>
              </p>
              <ul className="homepage-bottomList">
                <li>支持 Windows、macOS 与 Linux</li>
                <li>公开发布，方便直接分享下载链接</li>
                <li>版本说明可与 Release 页面同步查看</li>
              </ul>
            </div>
            <div className="homepage-bottomCard">
              <p className="homepage-bottomEyebrow">
                <Translate id="homepage.bottom.docsEyebrow">文档入口</Translate>
              </p>
              <h2>
                <Translate id="homepage.bottom.docsTitle">快速完成安装、连接与首次收发</Translate>
              </h2>
              <p>
                <Translate id="homepage.bottom.docsBody">
                  文档页已经覆盖快速开始与下载说明，后续可以持续补充设备连接、参数配置和常见问题。
                </Translate>
              </p>
              <ul className="homepage-bottomList">
                <li>快速开始路径清晰</li>
                <li>便于后续补充安装与使用说明</li>
                <li>更新日志与文档位于同一站点</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default HomePage;
