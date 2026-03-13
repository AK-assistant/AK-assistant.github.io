import React, { useMemo } from 'react';
import Translate, { translate } from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

type LatestReleaseData = {
  version?: string;
  platforms?: Record<string, { url: string }>;
};

const getPlatformKey = (): string | null => {
  if (typeof navigator === 'undefined') {
    return null;
  }

  const userAgent = navigator.userAgent.toLowerCase();

  if (userAgent.includes('windows')) {
    return 'windows-x86_64';
  }

  if (userAgent.includes('macintosh')) {
    return 'darwin-universal';
  }

  if (userAgent.includes('linux')) {
    return 'linux-x86_64';
  }

  return null;
};

const buildDownloadUrl = (
  latestReleaseData: LatestReleaseData,
  releasesUrl: string
): string => {
  const platformKey = getPlatformKey();

  if (!platformKey) {
    return releasesUrl;
  }

  return latestReleaseData.platforms?.[platformKey]?.url ?? releasesUrl;
};

const DownloadButton: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();
  const customFields = siteConfig.customFields as {
    releasesUrl?: string;
    latestReleaseData?: LatestReleaseData;
  };

  const releasesUrl =
    customFields.releasesUrl ??
    'https://github.com/AK-assistant/AK-assistant.github.io/releases/latest';
  const latestReleaseData = customFields.latestReleaseData ?? {};

  const downloadUrl = useMemo(() => {
    return buildDownloadUrl(latestReleaseData, releasesUrl);
  }, [latestReleaseData, releasesUrl]);

  return (
    <Link className="button button--primary button--lg hero__downloadButton" to={downloadUrl}>
      <Translate id="homepage.hero.downloadButton">立即下载</Translate>
    </Link>
  );
};

export const getDownloadDescription = (): string => {
  return translate({
    id: 'homepage.hero.downloadDescription',
    message: '安装包托管于 GitHub Releases，可按平台跳转到对应资源。'
  });
};

export default DownloadButton;
