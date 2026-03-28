import { Helmet } from 'react-helmet-async';

interface SeoHelmetProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
}

const SeoHelmet = ({ title, description, canonical, ogImage = 'https://nocometabbtp.com/nocometab-logo.jpg' }: SeoHelmetProps) => {
  const fullTitle = title.includes('NOCOMETAB') ? title : `${title} | NOCOMETAB BTP`;
  const canonicalUrl = canonical || `https://nocometabbtp.com${window.location.pathname}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SeoHelmet;
