import { motion } from 'framer-motion';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { PAGE_SEO } from '@/config/seo';
import { SITE } from '@/config/site';

const PrivacyPolicy = () => {
  const breadcrumbItems = [{ label: 'Privacy Policy', href: '/privacy-policy' }];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <SEO
        title={PAGE_SEO.privacy.title}
        description={PAGE_SEO.privacy.description}
        path={PAGE_SEO.privacy.path}
      />

      <main className="min-h-screen bg-background pt-32 pb-20">
        <div className="container max-w-4xl mx-auto px-6">
          <Breadcrumbs items={breadcrumbItems} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-8">
              Privacy Policy
            </h1>

            <p className="text-muted-foreground mb-4">
              Last updated: June 6, 2026
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              This Privacy Policy explains how {SITE.legalName} (&quot;{SITE.fullName}&quot;,
              &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, and protects your
              information when you visit{' '}
              <a href={SITE.url} className="text-primary hover:underline">
                {SITE.url}
              </a>{' '}
              or use our freelancing and digital services.
            </p>

            <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  1. Who We Are
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {SITE.legalName} is a freelancing and digital solutions company based in{' '}
                  {SITE.location.formatted}. We provide DevOps, software development, bookkeeping,
                  digital marketing, design, and business support services to clients locally and
                  internationally.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                  <li>
                    <strong className="text-foreground">Email:</strong>{' '}
                    <a href={`mailto:${SITE.contact.email}`} className="text-primary hover:underline">
                      {SITE.contact.email}
                    </a>
                  </li>
                  <li>
                    <strong className="text-foreground">Phone:</strong>{' '}
                    <a href={`tel:${SITE.contact.phone.replace(/[^+\d]/g, '')}`} className="text-primary hover:underline">
                      {SITE.contact.phone}
                    </a>
                  </li>
                  <li>
                    <strong className="text-foreground">Address:</strong> {SITE.location.formatted}
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  2. Information We Collect
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may collect the following types of information:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>
                    <strong className="text-foreground">Contact information</strong> — name, email
                    address, phone number, company name, and message content when you submit our
                    contact form or communicate with us directly.
                  </li>
                  <li>
                    <strong className="text-foreground">Newsletter information</strong> — email
                    address if you subscribe to updates from our blog or mailing list.
                  </li>
                  <li>
                    <strong className="text-foreground">Project and business information</strong> —
                    details you share when requesting a quote or engaging our freelancing services,
                    such as project requirements, budgets, timelines, and technical specifications.
                  </li>
                  <li>
                    <strong className="text-foreground">Technical and usage data</strong> — browser
                    type, device information, IP address, pages visited, referral source, and
                    general website interaction data collected through cookies and similar
                    technologies.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  3. How We Use Your Information
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use personal information for legitimate business purposes, including to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Respond to inquiries and provide customer support</li>
                  <li>Evaluate, propose, and deliver freelancing and digital services</li>
                  <li>Send service-related updates, newsletters, and marketing communications where permitted</li>
                  <li>Improve our website, content, and service offerings</li>
                  <li>Maintain security and prevent fraud or misuse of our website</li>
                  <li>Comply with legal, regulatory, and contractual obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  4. Legal Basis for Processing
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Depending on your location and the nature of our interaction, we process personal
                  information based on your consent, our legitimate business interests, the
                  performance of a contract or pre-contractual steps, and compliance with applicable
                  law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  5. How We Share Information
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We do not sell your personal information. We may share information only when
                  necessary:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>
                    With trusted service providers that help us operate our website, hosting,
                    analytics, communication, or payment systems
                  </li>
                  <li>
                    With members of our team who need access to deliver services you have requested
                  </li>
                  <li>
                    When required by law, court order, or government authority
                  </li>
                  <li>
                    To protect the rights, safety, and security of {SITE.fullName}, our clients, or
                    others
                  </li>
                  <li>
                    In connection with a business transfer, merger, or restructuring, where permitted
                    by law
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  6. Cookies and Similar Technologies
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website uses cookies and local storage to remember preferences, including your
                  cookie consent choice. You can manage or disable cookies through your browser
                  settings. Some website features may not function properly if cookies are disabled.
                  For more information, refer to the cookie notice displayed on our website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  7. Data Retention
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We retain personal information only for as long as necessary to fulfill the
                  purposes described in this policy, including providing services, maintaining
                  business records, resolving disputes, and meeting legal obligations. Retention
                  periods may vary depending on the type of data and our relationship with you.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  8. Data Security
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement reasonable administrative, technical, and organizational safeguards
                  designed to protect personal information against unauthorized access, loss, misuse,
                  or disclosure. However, no method of transmission over the internet or electronic
                  storage is completely secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  9. International Data Transfers
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {SITE.fullName} is based in Pakistan and serves clients worldwide. If you access
                  our website or services from outside Pakistan, your information may be transferred
                  to, stored in, or processed in Pakistan or other countries where our service
                  providers operate. We take reasonable steps to ensure appropriate protection when
                  such transfers occur.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  10. Your Rights and Choices
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Depending on applicable law, you may have the right to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Request access to the personal information we hold about you</li>
                  <li>Request correction of inaccurate or incomplete information</li>
                  <li>Request deletion of your personal information, subject to legal exceptions</li>
                  <li>Withdraw consent where processing is based on consent</li>
                  <li>Opt out of marketing communications at any time</li>
                  <li>Lodge a complaint with a relevant data protection authority, where applicable</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  To exercise these rights, contact us at{' '}
                  <a href={`mailto:${SITE.contact.email}`} className="text-primary hover:underline">
                    {SITE.contact.email}
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  11. Children&apos;s Privacy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website and services are not directed to individuals under the age of 18. We do
                  not knowingly collect personal information from children. If you believe a child has
                  provided us with personal information, please contact us so we can take appropriate
                  action.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  12. Third-Party Links
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website may contain links to third-party websites or platforms such as
                  LinkedIn, Upwork, or other external services. We are not responsible for the
                  privacy practices of those third parties. We encourage you to review their privacy
                  policies before providing personal information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  13. Changes to This Policy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. When we do, we will revise the
                  &quot;Last updated&quot; date at the top of this page. Continued use of our website
                  after changes become effective constitutes acceptance of the updated policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  14. Contact Us
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about this Privacy Policy or how we handle your information,
                  please contact:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                  <li>
                    <strong className="text-foreground">{SITE.legalName}</strong>
                  </li>
                  <li>{SITE.location.formatted}</li>
                  <li>
                    Email:{' '}
                    <a href={`mailto:${SITE.contact.email}`} className="text-primary hover:underline">
                      {SITE.contact.email}
                    </a>
                  </li>
                  <li>
                    Phone:{' '}
                    <a href={`tel:${SITE.contact.phone.replace(/[^+\d]/g, '')}`} className="text-primary hover:underline">
                      {SITE.contact.phone}
                    </a>
                  </li>
                </ul>
              </section>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
