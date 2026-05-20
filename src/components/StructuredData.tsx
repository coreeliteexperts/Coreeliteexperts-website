import { Helmet } from 'react-helmet-async';
import { SITE } from '@/config/site';

interface OrganizationSchemaProps {
  name?: string;
  url?: string;
  logo?: string;
  description?: string;
  email?: string;
  address?: {
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
  };
  socialLinks?: string[];
}

interface ArticleSchemaProps {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: {
    name: string;
    url?: string;
  };
  publisher?: {
    name: string;
    logo?: string;
  };
}

interface ServiceSchemaProps {
  name: string;
  description: string;
  provider: string;
  areaServed?: string;
  priceRange?: string;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

// Organization Schema - for the agency
export const OrganizationSchema = ({
  name = SITE.name,
  url = SITE.url,
  logo = `${SITE.url}${SITE.logo}`,
  description = SITE.description,
  email = 'info@coreeliteexperts.com',
  address = {
    streetAddress: 'Danyore',
    addressLocality: 'Gilgit',
    addressRegion: 'Gilgit-Baltistan',
    postalCode: '15100',
    addressCountry: 'PK',
  },
  socialLinks = [
    'https://twitter.com/studiodesign',
    'https://linkedin.com/company/studiodesign',
    'https://dribbble.com/studiodesign',
    'https://instagram.com/studiodesign',
  ],
}: OrganizationSchemaProps) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    url,
    logo,
    description,
    email,
    address: {
      '@type': 'PostalAddress',
      ...address,
    },
    sameAs: socialLinks,
    contactPoint: {
      '@type': 'ContactPoint',
      email,
      contactType: 'customer service',
      areaServed: 'Worldwide',
      availableLanguage: ['English'],
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

// Article Schema - for blog posts
export const ArticleSchema = ({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  author,
  publisher = {
    name: SITE.name,
    logo: `${SITE.url}${SITE.logo}`,
  },
}: ArticleSchemaProps) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    image,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: author.name,
      url: author.url,
    },
    publisher: {
      '@type': 'Organization',
      name: publisher.name,
      logo: {
        '@type': 'ImageObject',
        url: publisher.logo,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': window.location.href,
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

// Service Schema - for services page
export const ServiceSchema = ({
  name,
  description,
  provider = SITE.name,
  areaServed = 'Worldwide',
  priceRange = '$$$$',
}: ServiceSchemaProps) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: provider,
    },
    areaServed,
    priceRange,
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

// Breadcrumb Schema
export const BreadcrumbSchema = ({ items }: { items: BreadcrumbItem[] }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

// WebSite Schema with SearchAction
export const WebsiteSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE.url}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

// Professional Service Schema - for agency homepage
export const ProfessionalServiceSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: SITE.fullName,
    image: `${SITE.url}${SITE.logo}`,
    '@id': SITE.url,
    url: SITE.url,
    telephone: '+92-355-4475474',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Danyore',
      addressLocality: 'Gilgit',
      addressRegion: 'Gilgit-Baltistan',
      postalCode: '15100',
      addressCountry: 'PK',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 35.918,
      longitude: 74.308,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    priceRange: '$$$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};
