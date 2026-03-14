import React from 'react';
import Translate from '@docusaurus/Translate';
import styles from './TestimonialsSection.module.css';

const testimonials = [
  {
    key: 'alex',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
    nameId: 'homepage.testimonials.alex.name',
    defaultName: '张伟',
    roleId: 'homepage.testimonials.alex.role',
    defaultRole: '高级嵌入式工程师',
    contentId: 'homepage.testimonials.alex.content',
    defaultContent:
      '在过去十年里，我用过无数的串口调试助手，从界面古老的传统软件到现在的各种软件。AK-Assistant 以其惊人的性能和深思熟虑的交互设计脱颖而出。它的十六进制查看器非常直观，对不稳定连接的处理也异常健壮。它已经完全取代了我之前的工具链，成为了我日常开发的首选。'
  },
  {
    key: 'sarah',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    nameId: 'homepage.testimonials.sarah.name',
    defaultName: 'Li Sarah',
    roleId: 'homepage.testimonials.sarah.role',
    defaultRole: 'IoT 架构师',
    contentId: 'homepage.testimonials.sarah.content',
    defaultContent:
      '跨平台一致性简直是救星。我每天在 windows 和 Mac 间无缝切换，它不仅仅是一个串口调试工具，更是一套完整的团队生产力套件，每一次更新都让我们惊喜。'
  },
  {
    key: 'david',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
    nameId: 'homepage.testimonials.david.name',
    defaultName: '王强',
    roleId: 'homepage.testimonials.david.role',
    defaultRole: '硬件初创公司 CTO',
    contentId: 'homepage.testimonials.david.content',
    defaultContent:
      '一款顺手好用的串口工具，对于我们来讲就像一个得力助手一样，帮助我们快速定位问题，提高开发效率。'
  },
  {
    key: 'emily',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily',
    nameId: 'homepage.testimonials.emily.name',
    defaultName: 'Emily Chen',
    roleId: 'homepage.testimonials.emily.role',
    defaultRole: '无人机固件负责人',
    contentId: 'homepage.testimonials.emily.content',
    defaultContent:
      '每次调试串口数据的时候，ak-assistant 就像一个得力助手一样，始终在我身边默默支持。它响应迅速、界面清晰，总能帮我快速定位问题所在，让整个调试过程变得顺畅许多。'
  },
  {
    key: 'michael',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
    nameId: 'homepage.testimonials.michael.name',
    defaultName: 'Michael Brown',
    roleId: 'homepage.testimonials.michael.role',
    defaultRole: '工业自动化工程师',
    contentId: 'homepage.testimonials.michael.content',
    defaultContent:
      '在恶劣环境下，连接的可靠性至关重要。它的自动重连功能非常智能，且在全天候的稳定性测试中表现依然出色，远超我用过的其他工具。'
  },
  {
    key: 'jessica',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica',
    nameId: 'homepage.testimonials.jessica.name',
    defaultName: 'Jessica Wu',
    roleId: 'homepage.testimonials.jessica.role',
    defaultRole: '开源社区贡献者',
    contentId: 'homepage.testimonials.jessica.content',
    defaultContent:
      '作为一个 UI 细节控，我非常欣赏 AK-Assistant 的设计细节。深色模式的对比度平衡得完美，即使盯着十六进制码看了8小时，眼睛也不会觉得累。它让底层开发重新变得令人愉悦。'
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.wrap}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <Translate id="homepage.testimonials.title">他们都在用</Translate>
          </h2>
          <p className={styles.subtitle}>
            <Translate id="homepage.testimonials.subtitle">
              加入成千上万的开发者，体验 AK-Assistant 如何改变你的开发工作流。
            </Translate>
          </p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((item) => (
            <article key={item.key} className={styles.card}>
              <div className={styles.person}>
                <img src={item.avatar} alt={item.defaultName} className={styles.avatar} />
                <div>
                  <div className={styles.name}>
                    <Translate id={item.nameId}>{item.defaultName}</Translate>
                  </div>
                  <div className={styles.role}>
                    <Translate id={item.roleId}>{item.defaultRole}</Translate>
                  </div>
                </div>
              </div>
              <p className={styles.quote}>
                <Translate id={item.contentId}>{item.defaultContent}</Translate>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
