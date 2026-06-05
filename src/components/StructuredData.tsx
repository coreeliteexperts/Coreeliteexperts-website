import { Helmet } from 'react-helmet-async';
import { SITE } from '@/config/site';

interface OrganizationSchemaProps {
  name?: string;
  url?: string;
  logo?: string;
  description?: string;
  email?: string;
  telephone?: string;
  foundingDate?: string;
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

const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: SITE.location.streetAddress,
  addressLocality: SITE.location.city,
  addressRegion: SITE.location.region,
  postalCode: SITE.location.postalCode,
  addressCountry: SITE.location.countryCode,
};

const geoCoordinates = {
  '@type': 'GeoCoordinates',
  latitude: SITE.location.latitude,
  longitude: SITE.location.longitude,
};

const sameAs = Object.values(SITE.social).filter(Boolean);

export const OrganizationSchema = ({
  name = SITE.fullName,
  url = SITE.url,
  logo = `${SITE.url}${SITE.logo}`,
  description = SITE.description,
  email = SITE.contact.email,
  telephone = SITE.contact.phone,
  foundingDate = SITE.founded,
  address = {
    streetAddress: SITE.location.streetAddress,
    addressLocality: SITE.location.city,
    addressRegion: SITE.location.region,
    postalCode: SITE.location.postalCode,
    addressCountry: SITE.location.countryCode,
  },
  socialLinks = sameAs,
}: OrganizationSchemaProps) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    legalName: SITE.legalName,
    url,
    logo,
    image: logo,
    description,
    email,
    telephone,
    foundingDate,
    address: {
      '@type': 'PostalAddress',
      ...address,
    },
    areaServed: ['Pakistan', 'Worldwide'],
    knowsAbout: SITE.services,
    sameAs: socialLinks,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone,
      email,
      contactType: 'sales',
      areaServed: ['PK', 'Worldwide'],
      availableLanguage: ['English', 'Urdu'],
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export const ArticleSchema = ({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  author,
  publisher = {
    name: SITE.fullName,
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
      '@id': typeof window !== 'undefined' ? window.location.href : SITE.url,
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export const ServiceSchema = ({
  name,
  description,
  provider = SITE.fullName,
  areaServed = 'Worldwide',
  priceRange = '$$',
}: ServiceSchemaProps) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: provider,
      url: SITE.url,
    },
    areaServed,
    priceRange,
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `${SITE.url}/contact`,
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

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

export const WebsiteSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.fullName,
    alternateName: SITE.name,
    url: SITE.url,
    description: SITE.description,
    inLanguage: 'en',
    publisher: {
      '@type': 'Organization',
      name: SITE.fullName,
      logo: `${SITE.url}${SITE.logo}`,
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export const LocalBusinessSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: SITE.fullName,
    alternateName: SITE.name,
    image: `${SITE.url}${SITE.logo}`,
    '@id': SITE.url,
    url: SITE.url,
    description: SITE.description,
    telephone: SITE.contact.phone,
    email: SITE.contact.email,
    priceRange: '$$',
    address: postalAddress,
    geo: geoCoordinates,
    areaServed: [
      {
        '@type': 'City',
        name: SITE.location.city,
      },
      {
        '@type': 'Country',
        name: SITE.location.country,
      },
      'Worldwide',
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Freelancing Services',
      itemListElement: SITE.services.map((service, index) => ({
        '@type': 'Offer',
        position: index + 1,
        itemOffered: {
          '@type': 'Service',
          name: service,
          provider: {
            '@type': 'Organization',
            name: SITE.fullName,
          },
        },
      })),
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

/** @deprecated Use LocalBusinessSchema — kept as alias for existing imports */
export const ProfessionalServiceSchema = LocalBusinessSchema;

export const ServicesListSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Core Elite Experts Freelancing Services',
    description: 'Freelancing and digital services offered from Gilgit, Pakistan.',
    itemListElement: SITE.services.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: service,
      url: `${SITE.url}/services`,
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};
