import React from 'react';
import Translate from '@docusaurus/Translate';
import styles from './FeatureSection.module.css';

const FeatureSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <p className={styles.eyebrow}>
            <Translate id="homepage.features.eyebrow">核心能力</Translate>
          </p>
          <h2 className={styles.title}>
            <Translate id="homepage.features.title">为嵌入式开发而设计的现代串口工具</Translate>
          </h2>
        </div>
        <div className={styles.grid}>
          <article className={styles.card}>
            <h3>
              <Translate id="homepage.features.performance.title">轻快流畅</Translate>
            </h3>
            <p>
              <Translate id="homepage.features.performance.body">
                启动迅速、资源占用低，适合长时间调试和高频日常使用。
              </Translate>
            </p>
          </article>
          <article className={styles.card}>
            <h3>
              <Translate id="homepage.features.crossPlatform.title">全平台一致体验</Translate>
            </h3>
            <p>
              <Translate id="homepage.features.crossPlatform.body">
                面向 Windows、macOS 与 Linux 提供统一体验，减少跨环境切换成本。
              </Translate>
            </p>
          </article>
          <article className={styles.card}>
            <h3>
              <Translate id="homepage.features.docs.title">官网与文档统一</Translate>
            </h3>
            <p>
              <Translate id="homepage.features.docs.body">
                产品介绍、使用文档、更新日志和下载入口归于同一站点，便于长期维护。
              </Translate>
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
