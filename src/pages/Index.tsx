import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import CustomCursor from '@/components/CustomCursor';
import HeroSection from '@/components/sections/HeroSection';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { SITE } from '@/config/site';
import { OrganizationSchema, WebsiteSchema, ProfessionalServiceSchema } from '@/components/StructuredData';

const AboutSection = lazy(() => import('@/components/sections/AboutSection'));
const ServicesSection = lazy(() => import('@/components/sections/ServicesSection'));
const WorkSection = lazy(() => import('@/components/sections/WorkSection'));
const ProcessSection = lazy(() => import('@/components/sections/ProcessSection'));
const TestimonialsSection = lazy(() => import('@/components/sections/TestimonialsSection'));
const CTASection = lazy(() => import('@/components/sections/CTASection'));

const SectionFallback = () => (
  <div className="min-h-[30vh] w-full" aria-hidden />
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO description={SITE.description} url={SITE.url} />
      <OrganizationSchema />
      <WebsiteSchema />
      <ProfessionalServiceSchema />

      <CustomCursor />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="noise-overlay" />

        <Navigation />

        <main>
          <HeroSection />
          <Suspense fallback={<SectionFallback />}>
            <AboutSection />
            <ServicesSection />
            <WorkSection />
            <ProcessSection />
            <TestimonialsSection />
            <CTASection />
          </Suspense>
        </main>

        <Footer />
      </motion.div>
    </div>
  );
};

export default Index;
