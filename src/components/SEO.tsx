import { Helmet } from 'react-helmet-async';
import { SITE } from '@/config/site';
import { pageTitle, pageUrl } from '@/config/seo';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  path?: string;
  type?: 'website' | 'article' | 'profile';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  keywords?: string[];
  noindex?: boolean;
}

const SEO = ({
  title,
  description = SITE.description,
  image = `${SITE.url}${SITE.ogImage}`,
  url,
  path = '/',
  type = 'website',
  author,
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  keywords = [...SITE.keywords],
  noindex = false,
}: SEOProps) => {
  const canonicalUrl = url ?? pageUrl(path);
  const documentTitle = title ? pageTitle(title) : SITE.title;
  const socialTitle = title ?? SITE.fullName;
  const keywordContent = keywords.join(', ');
  const robots = noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

  return (
    <Helmet>
      <html lang="en" />
      <title>{documentTitle}</title>
      <meta name="title" content={documentTitle} />
      <meta name="description" content={description} />
      <meta name="author" content={author || SITE.fullName} />
      <meta name="robots" content={robots} />
      <meta name="language" content={SITE.language} />
      <meta name="keywords" content={keywordContent} />
      <meta name="geo.region" content={`${SITE.location.countryCode}-${SITE.location.region}`} />
      <meta name="geo.placename" content={SITE.location.city} />
      <meta name="geo.position" content={`${SITE.location.latitude};${SITE.location.longitude}`} />
      <meta name="ICBM" content={`${SITE.location.latitude}, ${SITE.location.longitude}`} />

      <link rel="canonical" href={canonicalUrl} />
      <link rel="icon" type="image/svg+xml" href={SITE.favicon} />
      <link rel="icon" type="image/png" href={SITE.faviconPng} />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href={SITE.faviconPng} />

      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={socialTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image.startsWith('http') ? image : `${SITE.url}${image}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={SITE.fullName} />
      <meta property="og:locale" content={SITE.locale} />
      <meta property="og:locale:alternate" content="en_US" />

      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && author && (
        <meta property="article:author" content={author} />
      )}
      {type === 'article' && section && (
        <meta property="article:section" content={section} />
      )}
      {type === 'article' &&
        tags.map((tag) => <meta key={tag} property="article:tag" content={tag} />)}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={socialTitle} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content={image.startsWith('http') ? image : `${SITE.url}${image}`}
      />
      <meta name="twitter:site" content={SITE.twitterHandle} />
      <meta name="twitter:creator" content={SITE.twitterHandle} />

      <meta name="theme-color" content="#0a0a0a" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="application-name" content={SITE.name} />
    </Helmet>
  );
};

export default SEO;
