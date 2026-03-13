import React from 'react';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './HomeHero.module.css';
import DownloadButton, { getDownloadDescription } from './DownloadButton';

const HomeHero: React.FC = () => {
  const heroFigureUrl = useBaseUrl('/img/hero-figure.png');

  return (
    <header className={styles.heroBanner}>
      <div className={styles.backgroundPattern} />
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.content}>
            <p className={styles.kicker}>
              <Translate id="homepage.hero.kicker">AK Assistant</Translate>
            </p>
            <h1 className={styles.title}>
              <Translate id="homepage.hero.title">串口调试，理应如此优雅</Translate>
            </h1>
            <p className={styles.subtitle}>
              <Translate id="homepage.hero.subtitle">
                轻快流畅、全平台支持、完全免费。现在开始，官网、文档与下载入口统一托管。
              </Translate>
            </p>
            <div className={styles.actions}>
              <DownloadButton />
              <Link className="button button--secondary button--lg" to="/docs/intro">
                <Translate id="homepage.hero.docsButton">查看文档</Translate>
              </Link>
            </div>
            <p className={styles.note}>{getDownloadDescription()}</p>
          </div>
          <div className={styles.visual}>
            <div className={styles.visualCard}>
              <img
                src={heroFigureUrl}
                alt="AK Assistant 首页视觉"
                className={styles.visualImage}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomeHero;
