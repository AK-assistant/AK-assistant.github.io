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
            <div className={styles.metaRow}>
              <span className={styles.metaBadge}>
                <Translate id="homepage.hero.meta.version">当前版本持续通过 GitHub Pages 发布</Translate>
              </span>
              <span className={styles.metaBadge}>
                <Translate id="homepage.hero.meta.platforms">支持 Windows / macOS / Linux</Translate>
              </span>
              <span className={styles.metaBadge}>
                <Translate id="homepage.hero.meta.free">完全免费</Translate>
              </span>
            </div>
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
            <div className={styles.quickFacts}>
              <div className={styles.quickFact}>
                <strong>定位</strong>
                <span>面向嵌入式开发者的现代串口工具</span>
              </div>
              <div className={styles.quickFact}>
                <strong>分发</strong>
                <span>安装包通过 GitHub Releases 获取</span>
              </div>
              <div className={styles.quickFact}>
                <strong>文档</strong>
                <span>官网、说明文档与更新日志统一维护</span>
              </div>
            </div>
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
