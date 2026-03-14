import React from 'react';
import Translate, { translate } from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';
import styles from './HomeHero.module.css';
import DownloadButton from './DownloadButton';

const HomeHero: React.FC = () => {
  const { i18n } = useDocusaurusContext();
  const isChineseLocale = i18n.currentLocale.startsWith('zh');
  const heroFigureUrl = useBaseUrl(
    i18n.currentLocale === 'en' ? '/img/hero-figure-en.png' : '/img/hero-figure-zh.png'
  );
  const heroBackgroundUrl = useBaseUrl('/img/hero-bg.png');
  const heroFigureAlt = translate({
    id: 'homepage.hero.figureAlt',
    message: 'AK Assistant 首页视觉'
  });
  const heroStyle = {
    ['--hero-background-image' as string]: `url(${heroBackgroundUrl})`
  } as React.CSSProperties;

  return (
    <header className={styles.heroBanner} style={heroStyle}>
      <div className={styles.backgroundPattern} />
      <div className={`container ${styles.container}`}>
        <div className={clsx(styles.content, isChineseLocale && styles.contentWide)}>
          <h1 className={styles.title}>
            <Translate id="homepage.hero.title">串口调试，理应如此优雅</Translate>
          </h1>
          <p className={clsx(styles.subtitle, isChineseLocale && styles.subtitleSingleLine)}>
            <Translate id="homepage.hero.subtitle">
              轻快流畅 · 全平台支持 · 完全免费 ── 专为嵌入式开发者打造的新一代串口工具
            </Translate>
          </p>
          <div className={styles.actions}>
            <DownloadButton />
            <Link className="button button--secondary button--lg" to="/docs/intro">
              <Translate id="homepage.hero.docsButton">查看文档</Translate>
            </Link>
          </div>
        </div>
        <div className={styles.visual}>
          <div className={styles.visualCard}>
            <img
              src={heroFigureUrl}
              alt={heroFigureAlt}
              className={styles.visualImage}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomeHero;
