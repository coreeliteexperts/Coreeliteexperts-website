import { motion } from 'framer-motion';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { PAGE_SEO } from '@/config/seo';
import { SITE } from '@/config/site';

const TermsOfService = () => {
  const breadcrumbItems = [{ label: 'Terms of Service', href: '/terms-of-service' }];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <SEO
        title={PAGE_SEO.terms.title}
        description={PAGE_SEO.terms.description}
        path={PAGE_SEO.terms.path}
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
              Terms of Service
            </h1>

            <p className="text-muted-foreground mb-4">
              Last updated: June 6, 2026
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              These Terms of Service (&quot;Terms&quot;) govern your use of the website operated by{' '}
              {SITE.legalName} (&quot;{SITE.fullName}&quot;, &quot;we&quot;, &quot;us&quot;, or
              &quot;our&quot;) at{' '}
              <a href={SITE.url} className="text-primary hover:underline">
                {SITE.url}
              </a>{' '}
              and your engagement with our freelancing and digital services. By accessing our website
              or requesting our services, you agree to these Terms.
            </p>

            <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  1. About Core Elite Experts
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {SITE.legalName} is a technology and operations company based in{' '}
                  {SITE.location.formatted}, providing freelancing and remote digital services to
                  startups, SMEs, and businesses worldwide. Our services include DevOps and cloud
                  engineering, software development, bookkeeping, digital marketing, UI/UX design,
                  video editing, and business support.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  2. Acceptance of Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  By using our website, submitting a contact form, requesting a proposal, or engaging
                  our services, you confirm that you have read, understood, and agree to be bound by
                  these Terms. If you do not agree, you must not use our website or services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  3. Website Use
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You agree to use our website only for lawful purposes. You must not:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Use the website in any way that violates applicable laws or regulations</li>
                  <li>Attempt to gain unauthorized access to our systems, data, or infrastructure</li>
                  <li>Interfere with the proper functioning, security, or availability of the website</li>
                  <li>Copy, scrape, reproduce, or redistribute website content without permission</li>
                  <li>Misrepresent your identity or affiliation when contacting us or requesting services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  4. Services and Project Agreements
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Information on our website is provided for general informational purposes. A binding
                  service relationship is created only when both parties agree to a specific scope of
                  work, timeline, pricing, and deliverables through a written proposal, contract,
                  statement of work, invoice, or platform agreement. If there is any conflict between
                  these Terms and a signed project agreement, the project agreement will prevail for
                  that engagement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  5. Service Delivery Models
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Depending on the service, we may offer work on an hourly, milestone-based, or fixed-price
                  basis. Available delivery models and pricing ranges are described on our Services page
                  and may vary by project complexity, urgency, and resource requirements.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  {SITE.services.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  6. Client Responsibilities
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  To enable successful delivery, clients agree to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Provide accurate project requirements, credentials, and business information</li>
                  <li>Respond to requests for feedback, approvals, and clarifications in a timely manner</li>
                  <li>Supply necessary access, assets, documentation, and materials required for delivery</li>
                  <li>Ensure they have the legal right to share any content, data, or systems provided to us</li>
                  <li>Make agreed payments according to the approved proposal or contract</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Delays caused by the client may affect timelines, milestones, and delivery schedules.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  7. Payment Terms
                </h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Payment terms, rates, and billing schedules are defined in each project agreement</li>
                  <li>A deposit or advance payment may be required before work begins</li>
                  <li>Invoices are due within the timeframe stated in the proposal or invoice</li>
                  <li>Late payments may result in paused work, delayed delivery, or additional charges where permitted</li>
                  <li>All fees are exclusive of applicable taxes, platform fees, or third-party charges unless stated otherwise</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  8. Revisions and Scope Changes
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  The number of revisions, support period, and included deliverables will be defined in
                  the relevant project agreement. Requests outside the agreed scope, including additional
                  features, integrations, meetings, or deliverables, may require a change request and
                  additional fees.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  9. Intellectual Property
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Unless otherwise agreed in writing:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>
                    All website content, branding, templates, internal tools, and pre-existing materials
                    remain the property of {SITE.fullName}
                  </li>
                  <li>
                    Upon full payment for a project, ownership of agreed final deliverables transfers to
                    the client as specified in the project agreement
                  </li>
                  <li>
                    We may retain the right to use non-confidential work samples for portfolio,
                    marketing, or reference purposes unless the client requests otherwise in writing
                  </li>
                  <li>
                    Third-party tools, libraries, stock assets, or licensed components may remain subject
                    to their own license terms
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  10. Confidentiality
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We treat client business information, credentials, financial data, and project details
                  as confidential and use them only to perform the agreed services. Clients are also
                  expected to keep confidential any proprietary methods, pricing, internal processes, or
                  non-public materials shared by {SITE.fullName}, unless disclosure is required by law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  11. Third-Party Platforms and Tools
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Some engagements may be delivered through third-party platforms such as Upwork,
                  cloud providers, payment processors, or collaboration tools. Your use of those
                  platforms is also subject to their own terms and policies. {SITE.fullName} is not
                  responsible for outages, policy changes, or actions taken by third-party providers
                  outside our reasonable control.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  12. Warranties and Disclaimers
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We strive to deliver professional services with care and competence. However, except as
                  expressly stated in a written project agreement, our website and services are provided
                  on an &quot;as is&quot; and &quot;as available&quot; basis. We do not guarantee
                  uninterrupted website access, specific business outcomes, search rankings, uptime
                  levels, or third-party platform performance unless explicitly agreed in writing.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  13. Limitation of Liability
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  To the fullest extent permitted by law, {SITE.fullName} shall not be liable for any
                  indirect, incidental, special, consequential, or punitive damages, including loss of
                  profits, revenue, data, or business opportunities. Our total liability for any claim
                  arising out of or relating to our services shall not exceed the amount paid by the
                  client to us for the specific service giving rise to the claim during the three months
                  preceding the event, unless a different limit is stated in a signed agreement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  14. Termination
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Either party may terminate an engagement according to the termination terms in the
                  applicable project agreement. Upon termination, the client remains responsible for
                  payment of all work completed, committed resources, and approved expenses up to the
                  effective termination date. We may suspend or refuse service if payments are overdue,
                  requirements are unlawful, or these Terms are materially breached.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  15. Governing Law
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms are governed by the laws of Pakistan, without regard to conflict of law
                  principles. Any disputes arising from these Terms or our services shall preferably be
                  resolved through good-faith negotiation. If unresolved, disputes may be subject to the
                  jurisdiction of the competent courts in Gilgit-Baltistan, Pakistan, unless otherwise
                  agreed in writing.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  16. Changes to These Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update these Terms from time to time. The updated version will be posted on
                  this page with a revised &quot;Last updated&quot; date. Continued use of our website
                  after changes become effective constitutes acceptance of the revised Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  17. Contact Information
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these Terms of Service, please contact:
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
                  <li>
                    Website:{' '}
                    <a href={SITE.url} className="text-primary hover:underline">
                      {SITE.url}
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

export default TermsOfService;
