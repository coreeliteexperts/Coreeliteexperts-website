import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { AnimatedLine } from '@/components/AnimatedText';
import { Building2, Target, Layers, Zap, TrendingUp } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Understanding the Business',
    description:
      'Every project starts with understanding the business itself — goals, challenges, operations, audience, and growth direction. We focus on identifying what is slowing execution and where systems can improve performance.',
    icon: Building2,
  },
  {
    number: '02',
    title: 'Building the Right Strategy',
    description:
      'Once we understand the business, we create a clear execution strategy. This includes technical planning, operational workflows, timelines, marketing direction, financial processes, and scalable infrastructure planning.',
    icon: Target,
  },
  {
    number: '03',
    title: 'Designing Scalable Systems',
    description:
      'Our team designs practical systems that support long-term growth — from cloud infrastructure and software platforms to UI/UX, accounting workflows, digital assets, and operational structures.',
    icon: Layers,
  },
  {
    number: '04',
    title: 'Execution & Implementation',
    description:
      'This is where strategy becomes reality. We deploy cloud systems, automate workflows, build applications, manage operations, execute marketing campaigns, and deliver solutions with performance and reliability in mind.',
    icon: Zap,
  },
  {
    number: '05',
    title: 'Optimization & Long-Term Support',
    description:
      'Business growth requires continuous improvement. We monitor systems, optimize workflows, improve performance, provide ongoing support, and help businesses scale with confidence over time.',
    icon: TrendingUp,
  },
];

export const ProcessSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="process" ref={sectionRef} className="py-24 md:py-32 bg-background relative">
      <div className="container-wide">
        {/* Header */}
        <div className="mb-24 md:mb-32 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="flex items-center gap-4 mb-6"
          >
            <span className="text-sm font-mono text-accent">04</span>
            <div className="h-px w-12 bg-accent" />
            <span className="text-sm font-mono text-muted-foreground tracking-wider">OUR PROCESS</span>
          </motion.div>
          
          <AnimatedLine>
            <h2 className="font-syne font-bold text-5xl md:text-7xl tracking-tight leading-[0.95] mb-8">
              How We Build, Execute, and Scale Solutions
            </h2>
          </AnimatedLine>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-lg text-muted-foreground leading-relaxed max-w-3xl"
          >
            At Core Elite Experts, we don&apos;t just deliver services — we build structured systems that help businesses operate efficiently and grow sustainably.
          </motion.p>
        </div>

        {/* Stacking Cards Container */}
        <div className="relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index} 
                className="sticky top-32 min-h-[50vh] mb-8 last:mb-0"
                style={{ zIndex: index + 1 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative bg-card border border-border overflow-hidden group shadow-2xl shadow-black/5"
                >
                  {/* Accent Top Line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-12 min-h-[400px]">
                    {/* Number Column */}
                    <div className="md:col-span-2 p-8 border-b md:border-b-0 md:border-r border-border bg-secondary/10 flex md:flex-col justify-between items-start">
                       <span className="text-4xl font-syne font-bold text-foreground/20 group-hover:text-accent transition-colors duration-300">
                          {step.number}
                       </span>
                       <div className="hidden md:block w-px h-16 bg-foreground/10" />
                    </div>

                    {/* Content Column */}
                    <div className="md:col-span-6 p-8 md:p-12 flex flex-col justify-center relative z-10 bg-background">
                       <div className="mb-6 w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-500">
                          <Icon size={32} strokeWidth={1.5} />
                       </div>
                       <h3 className="text-3xl md:text-4xl font-syne font-bold mb-6 group-hover:translate-x-2 transition-transform duration-300">
                          {step.title}
                       </h3>
                       <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                          {step.description}
                       </p>
                    </div>

                    {/* Visual/Decoration Column */}
                    <div className="hidden md:block md:col-span-4 bg-secondary/5 relative overflow-hidden border-l border-border">
                       {/* Abstract Geometric Pattern */}
                       <div className="absolute inset-0 opacity-20">
                          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border-[20px] border-foreground/5 rounded-full 
                             ${index % 2 === 0 ? 'border-dashed animate-spin-slow' : 'border-solid animate-pulse-slow'}`} 
                          />
                       </div>
                       
                       {/* Hover Reveal Text */}
                       <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <span className="font-mono text-xs uppercase tracking-[0.3em] -rotate-90 whitespace-nowrap text-accent">
                             Phase {step.number}
                          </span>
                       </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
