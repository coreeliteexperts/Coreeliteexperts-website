import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import Footer from '@/components/Footer';
import MagneticButton from '@/components/MagneticButton';
import Navigation from '@/components/Navigation';

type ServiceOffering = {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  servicesInclude: string[];
  pricing: { hourly: string; fixed: string };
  deliveryModels: string[];
};

const serviceOfferings: ServiceOffering[] = [
  {
    id: 'devops-cloud',
    number: '01',
    title: 'DevOps & Cloud Engineering',
    tagline: 'Scalable cloud infrastructure & automation',
    description:
      'We build secure, automated, and production-ready cloud environments using modern DevOps practices and cloud technologies.',
    servicesInclude: [
      'AWS, Azure & GCP Infrastructure',
      'Docker & Kubernetes Deployment',
      'CI/CD Pipeline Automation',
      'Terraform & Infrastructure as Code',
      'Cloud Migration & Optimization',
      'Monitoring & Logging Setup',
      'Linux Server Management',
      'Deployment Troubleshooting',
    ],
    pricing: { hourly: '$25–$70/hr', fixed: 'Starting from $300' },
    deliveryModels: ['Hourly', 'Milestone-Based', 'Fixed Price'],
  },
  {
    id: 'software-dev',
    number: '02',
    title: 'Software Development',
    tagline: 'Custom applications engineered for performance',
    description:
      'We develop scalable web applications, APIs, dashboards, and backend systems tailored to operational and business requirements.',
    servicesInclude: [
      'Web Application Development',
      'Frontend & Backend Systems',
      'API Development & Integration',
      'SaaS Platforms',
      'Admin Dashboards',
      'Database Architecture',
      'Custom Business Systems',
    ],
    pricing: { hourly: '$20–$60/hr', fixed: 'Starting from $500' },
    deliveryModels: ['Hourly', 'Milestone-Based', 'Fixed Price'],
  },
  {
    id: 'accounting',
    number: '03',
    title: 'Accounting & Bookkeeping',
    tagline: 'Structured financial management solutions',
    description:
      'Professional bookkeeping and accounting services designed for startups, agencies, eCommerce, and real estate businesses.',
    servicesInclude: [
      'QuickBooks Online',
      'Xero & Buildium Support',
      'Reconciliation & Cleanup',
      'Financial Reporting',
      'Payroll Support',
      'Monthly Bookkeeping',
      'Tax Preparation Support',
    ],
    pricing: { hourly: '$10–$35/hr', fixed: 'Starting from $100' },
    deliveryModels: ['Hourly', 'Monthly Retainer', 'Fixed Price'],
  },
  {
    id: 'digital-marketing',
    number: '04',
    title: 'Digital Marketing',
    tagline: 'Growth-focused marketing execution',
    description:
      'We help businesses improve visibility, engagement, and lead generation through modern digital marketing strategies.',
    servicesInclude: [
      'Social Media Marketing',
      'SEO Optimization',
      'Email Marketing',
      'Lead Generation',
      'Campaign Management',
      'Content Marketing',
      'Marketing Strategy',
    ],
    pricing: { hourly: '$15–$50/hr', fixed: 'Starting from $200' },
    deliveryModels: ['Hourly', 'Monthly Retainer', 'Milestone-Based'],
  },
  {
    id: 'ui-ux',
    number: '05',
    title: 'UI/UX & Graphic Design',
    tagline: 'Modern design systems & digital experiences',
    description:
      'Professional interfaces, branding assets, dashboards, and creative solutions designed for usability and engagement.',
    servicesInclude: [
      'Website UI/UX Design',
      'Mobile App Design',
      'Dashboard Design',
      'Branding & Identity',
      'Social Media Creatives',
      'Marketing Graphics',
      'Prototyping & Wireframes',
    ],
    pricing: { hourly: '$15–$45/hr', fixed: 'Starting from $150' },
    deliveryModels: ['Hourly', 'Milestone-Based', 'Fixed Price'],
  },
  {
    id: 'video',
    number: '06',
    title: 'Video Editing & Media Production',
    tagline: 'Creative media solutions for modern brands',
    description:
      'Professional editing services for promotional videos, social media content, podcasts, and marketing campaigns.',
    servicesInclude: [
      'Social Media Video Editing',
      'Promotional Videos',
      'Reels & Shorts',
      'Podcast Editing',
      'Motion Graphics',
      'Brand Videos',
      'Content Optimization',
    ],
    pricing: { hourly: '$15–$40/hr', fixed: 'Starting from $100' },
    deliveryModels: ['Hourly', 'Milestone-Based', 'Fixed Price'],
  },
  {
    id: 'business-support',
    number: '07',
    title: 'Business Support & Freelancing Services',
    tagline: 'Operational support for growing businesses',
    description:
      'Reliable support services designed to improve execution, productivity, and business operations.',
    servicesInclude: [
      'Virtual Assistance',
      'Project Coordination',
      'Data Management',
      'Research & Documentation',
      'Client Communication Support',
      'Marketplace Management',
    ],
    pricing: { hourly: '$10–$30/hr', fixed: 'Starting from $80' },
    deliveryModels: ['Hourly', 'Monthly Retainer', 'Fixed Price'],
  },
];

const deliveryModels = [
  {
    title: 'Hourly Model',
    description: 'Best for ongoing support, troubleshooting, and flexible workloads.',
  },
  {
    title: 'Milestone-Based Projects',
    description: 'Ideal for phased development, deployments, and structured execution.',
  },
  {
    title: 'Fixed Price Projects',
    description: 'Suitable for clearly defined scopes and deliverables.',
  },
];

const Services = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const deliveryRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const servicesInView = useInView(servicesRef, { once: true, margin: '-100px' });
  const deliveryInView = useInView(deliveryRef, { once: true, margin: '-100px' });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({
      x: (e.clientX - window.innerWidth / 2) / 30,
      y: (e.clientY - window.innerHeight / 2) / 30,
    });
  };

  return (
    <div className="min-h-screen bg-background" onMouseMove={handleMouseMove}>
      <Navigation />

      {/* Hero */}
      <section ref={heroRef} className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`h-${i}`}
              className="absolute left-0 right-0 h-px bg-foreground/5"
              style={{ top: `${16.66 * (i + 1)}%` }}
              initial={{ scaleX: 0 }}
              animate={heroInView ? { scaleX: 1 } : {}}
              transition={{ delay: i * 0.05, duration: 1.2 }}
            />
          ))}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={`v-${i}`}
              className="absolute top-0 bottom-0 w-px bg-foreground/5"
              style={{ left: `${25 * (i + 1)}%` }}
              initial={{ scaleY: 0 }}
              animate={heroInView ? { scaleY: 1 } : {}}
              transition={{ delay: 0.2 + i * 0.05, duration: 1.2 }}
            />
          ))}
        </div>

        <motion.div
          className="absolute top-32 right-[10%] w-20 h-20 border border-accent/20"
          style={{ transform: 'rotate(45deg)', x: mousePosition.x * 2, y: mousePosition.y * 2 }}
        />
        <motion.div
          className="absolute bottom-20 left-[15%] w-32 h-32 rounded-full border border-accent/10"
          style={{ x: mousePosition.x * -2, y: mousePosition.y * -2 }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full bg-accent/10 blur-[120px] pointer-events-none"
          style={{ top: '20%', right: '10%', x: mousePosition.x * 3, y: mousePosition.y * 3 }}
        />

        <div className="container-wide relative z-10">
          <div className="max-w-4xl">
            {['Services &', 'Pricing'].map((text, index) => (
              <div key={text} className="overflow-hidden">
                <motion.h1
                  initial={{ y: '100%' }}
                  animate={heroInView ? { y: 0 } : {}}
                  transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: [0.19, 1, 0.22, 1] }}
                  className={`font-syne font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] ${
                    index === 1 ? 'text-accent' : 'text-foreground'
                  }`}
                >
                  {text}
                </motion.h1>
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={heroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex items-center gap-4 mt-12 md:mt-16 mb-6"
          >
            <span className="text-sm font-mono text-accent">01</span>
            <div className="h-px w-12 bg-accent" />
            <span className="text-sm font-mono text-muted-foreground tracking-wider">SERVICES</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="font-syne font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-4xl leading-tight mb-6"
          >
            Solutions Built for Modern Businesses
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.65, duration: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed"
          >
            Core Elite Experts provides scalable technology, operations, and digital solutions designed to help businesses improve execution, automate workflows, and support long-term growth.
          </motion.p>
        </div>
      </section>

      {/* What we offer + service cards */}
      <section ref={servicesRef} className="py-24 md:py-32 relative border-t border-border/50">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16 md:mb-20"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-mono text-accent">02</span>
              <div className="h-px w-12 bg-accent" />
              <span className="text-sm font-mono text-muted-foreground tracking-wider">WHAT WE OFFER</span>
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
              End-to-end services tailored to your business needs.
            </p>
          </motion.div>

          <div className="flex flex-col gap-12 md:gap-16">
            {serviceOfferings.map((service, index) => (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 32 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: Math.min(index * 0.06, 0.4) }}
                className="border border-border bg-card/20 overflow-hidden"
              >
                <div className="p-8 md:p-10 lg:p-12">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-8">
                    <div>
                      <span className="text-sm font-mono text-accent block mb-3">{service.number}</span>
                      <h3 className="font-syne font-bold text-3xl md:text-4xl lg:text-5xl mb-2">{service.title}</h3>
                      <p className="text-sm font-mono uppercase tracking-wider text-muted-foreground">{service.tagline}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-10">{service.description}</p>

                  <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
                    <div className="lg:col-span-7">
                      <h4 className="text-xs font-mono uppercase tracking-widest text-foreground mb-4">Services Include</h4>
                      <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                        {service.servicesInclude.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm md:text-base">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="lg:col-span-5 space-y-8 border-t lg:border-t-0 lg:border-l border-border/60 pt-8 lg:pt-0 lg:pl-10">
                      <div>
                        <h4 className="text-xs font-mono uppercase tracking-widest text-foreground mb-3">Pricing</h4>
                        <p className="text-foreground font-medium">Hourly: {service.pricing.hourly}</p>
                        <p className="text-muted-foreground mt-1">Fixed Projects: {service.pricing.fixed}</p>
                      </div>
                      <div>
                        <h4 className="text-xs font-mono uppercase tracking-widest text-foreground mb-3">Delivery Model</h4>
                        <ul className="space-y-2">
                          {service.deliveryModels.map((m) => (
                            <li key={m} className="flex items-center gap-2 text-sm md:text-base">
                              <Check className="w-4 h-4 text-accent shrink-0" strokeWidth={2.5} />
                              <span>{m}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-foreground hover:text-accent transition-colors"
                      >
                        Start Project →
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Project delivery models */}
      <section ref={deliveryRef} className="py-24 md:py-32 bg-secondary/30 border-t border-border/50">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={deliveryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 md:mb-20"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-sm font-mono text-accent">03</span>
              <div className="h-px w-12 bg-accent" />
              <span className="text-sm font-mono text-muted-foreground tracking-wider">PROJECT DELIVERY MODELS</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-syne font-bold max-w-3xl mx-auto leading-tight">
              Flexible engagement options for every business.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
            {deliveryModels.map((model, index) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 28 }}
                animate={deliveryInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
                className="bg-background p-8 md:p-10 flex flex-col min-h-[220px]"
              >
                <h3 className="font-syne font-bold text-xl md:text-2xl mb-4">{model.title}</h3>
                <p className="text-muted-foreground leading-relaxed flex-grow">{model.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-foreground/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-foreground/5"
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />

        <div className="container-wide text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-mono text-accent mb-6 block">START TODAY</span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-syne font-bold mb-6 max-w-4xl mx-auto leading-tight">
              Ready to Build Smarter Systems for Your Business?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
              Let&apos;s discuss your project and create scalable solutions designed for long-term growth.
            </p>
            <MagneticButton>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-full"
              >
                Schedule a Consultation
                <motion.div
                  className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center"
                  whileHover={{ rotate: 45 }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </Link>
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
