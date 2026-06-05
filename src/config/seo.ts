import { SITE } from '@/config/site';

export type PageSeo = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

const page = (title: string, description: string, path: string, keywords: string[] = []): PageSeo => ({
  title,
  description,
  path,
  keywords: [...SITE.keywords, ...keywords],
});

export const PAGE_SEO = {
  home: page(
    'Freelancing & DevOps Services in Gilgit, Pakistan',
    SITE.description,
    '/',
    ['hire freelancers Pakistan', 'Gilgit freelancing agency', 'remote DevOps team'],
  ),
  about: page(
    'About Us | Gilgit-Based Freelancing Team',
    'Meet Core Elite Experts — a Gilgit, Pakistan freelancing company helping startups and SMEs with DevOps, software, bookkeeping, marketing, and business operations since 2024.',
    '/about',
    ['about Core Elite Experts', 'freelancing team Gilgit', 'Pakistan digital agency'],
  ),
  services: page(
    'Freelancing Services | DevOps, Software, Bookkeeping & More',
    'Explore freelancing services from Core Elite Experts in Gilgit, Pakistan: DevOps, cloud engineering, custom software, bookkeeping, SEO, UI/UX, video editing, and virtual business support.',
    '/services',
    ['freelancing services list', 'DevOps services Pakistan', 'bookkeeping freelancer', 'software development services'],
  ),
  work: page(
    'Projects & Case Studies',
    'View projects delivered by Core Elite Experts — a Gilgit-based freelancing team specializing in DevOps, software, design, and business solutions for global clients.',
    '/work',
    ['freelancing portfolio', 'DevOps case studies', 'client projects Pakistan'],
  ),
  blog: page(
    'Blog | DevOps, Software & Business Insights',
    'Articles on DevOps, cloud engineering, software development, bookkeeping, digital marketing, and freelancing best practices from Core Elite Experts in Gilgit, Pakistan.',
    '/blog',
    ['DevOps blog', 'freelancing tips', 'Pakistan tech insights'],
  ),
  contact: page(
    'Contact | Hire Freelancers in Gilgit, Pakistan',
    'Contact Core Elite Experts in Gilgit, Pakistan for freelancing services — DevOps, software development, bookkeeping, marketing, and business support. Email info@coreeliteexperts.com or call +92 355 4475474.',
    '/contact',
    ['hire freelancers Gilgit', 'contact Core Elite Experts', 'freelancing quote Pakistan'],
  ),
  privacy: page(
    'Privacy Policy',
    'Privacy policy for Core Elite Experts — how we collect, use, and protect your information when you use our freelancing services website.',
    '/privacy-policy',
  ),
  terms: page(
    'Terms of Service',
    'Terms of service for Core Elite Experts freelancing and digital solutions offered from Gilgit, Pakistan.',
    '/terms-of-service',
  ),
} as const;

export const pageUrl = (path: string) => `${SITE.url}${path}`;

export const pageTitle = (title: string) => `${title} | ${SITE.fullName}`;
