import React from 'react';
import Translate from '@docusaurus/Translate';
import clsx from 'clsx';
import { Gift, Monitor, Sparkles, Wind } from 'lucide-react';
import styles from './FeatureSection.module.css';

const FeatureSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.wrap}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <Translate id="homepage.features.title">硬核功能，为生产力而生</Translate>
          </h2>
          <p className={styles.subtitle}>
            <Translate id="homepage.features.subtitle">
              Designed for high-performance teams and creative individuals.
            </Translate>
          </p>
        </div>

        <div className={styles.grid}>
          <article className={clsx(styles.card, styles.cardWide)}>
            <div className={styles.iconBox}>
              <Wind size={32} strokeWidth={2.1} />
            </div>
            <h3>
              <Translate id="homepage.features.performance.title">轻盈如风，畅快随行</Translate>
            </h3>
            <p>
              <Translate id="homepage.features.performance.body">
                启动迅捷，运行丝滑，资源占用极低，让每一次操作都流畅自如。
              </Translate>
            </p>
          </article>

          <article className={clsx(styles.card, styles.cardNarrow)}>
            <div className={styles.iconBox}>
              <Monitor size={32} strokeWidth={2.1} />
            </div>
            <h3>
              <Translate id="homepage.features.crossPlatform.title">全平台无缝体验</Translate>
            </h3>
            <p>
              <Translate id="homepage.features.crossPlatform.body">
                无论 Windows、macOS 还是 Linux，一致的高品质体验，随心切换，高效无界。
              </Translate>
            </p>
          </article>

          <article className={clsx(styles.card, styles.cardNarrow)}>
            <div className={styles.iconBox}>
              <Sparkles size={32} strokeWidth={2.1} />
            </div>
            <h3>
              <Translate id="homepage.features.design.title">现代美学，悦目悦用</Translate>
            </h3>
            <p>
              <Translate id="homepage.features.design.body">
                简洁优雅的界面设计，直观易用的操作逻辑，支持个性化主题，重新定义串口工具的使用感受。
              </Translate>
            </p>
          </article>

          <article className={clsx(styles.card, styles.cardWide)}>
            <div className={styles.iconBox}>
              <Gift size={32} strokeWidth={2.1} />
            </div>
            <h3>
              <Translate id="homepage.features.free.title">完全免费，开箱即用</Translate>
            </h3>
            <p>
              <Translate id="homepage.features.free.body">
                功能完整，零费用、零订阅，无需等待，即刻开启专业级体验。
              </Translate>
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
