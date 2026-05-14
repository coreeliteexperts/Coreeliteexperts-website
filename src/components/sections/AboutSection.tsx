import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { AnimatedLine } from '@/components/AnimatedText';

const stats = [
  { number: '150+', label: 'Projects Delivered' },
  { number: '50+', label: 'Business Clients' },
  { number: '30+', label: 'Team Members' },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left - rect.width / 2) / 30,
      y: (e.clientY - rect.top - rect.height / 2) / 30,
    });
  };

  return (
    <section 
      id="about" 
      ref={ref} 
      onMouseMove={handleMouseMove}
      className="section-padding bg-secondary/30 relative overflow-hidden"
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`h-${i}`}
            className="absolute left-0 right-0 h-px bg-foreground/5"
            style={{ top: `${16.66 * (i + 1)}%` }}
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: i * 0.05, duration: 1.2 }}
          />
        ))}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`v-${i}`}
            className="absolute top-0 bottom-0 w-px bg-foreground/5"
            style={{ left: `${25 * (i + 1)}%` }}
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ delay: 0.2 + i * 0.05, duration: 1.2 }}
          />
        ))}
      </div>

      {/* Floating accent orb */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px] pointer-events-none"
        style={{
          x: mousePosition.x * 2,
          y: mousePosition.y * 2,
          top: '20%',
          right: '10%',
        }}
      />

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 relative">
            {/* Section header with number - moved inside for better flow */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="text-sm font-mono text-accent">01</span>
              <div className="h-px w-12 bg-accent" />
              <span className="text-sm font-mono text-muted-foreground tracking-wider">ABOUT US</span>
            </motion.div>

            <AnimatedLine delay={0.2}>
              <h2 className="font-syne font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight mb-8 leading-[1.1]">
                Building Systems That Help Businesses Scale
              </h2>
            </AnimatedLine>

            <div className="space-y-5 sm:space-y-6 mb-10 max-w-2xl">
              <AnimatedLine delay={0.3}>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Core Elite Experts (Private) Limited is a technology and operations company focused on helping startups, SMEs, and modern businesses improve execution, automate workflows, and scale efficiently.
                </p>
              </AnimatedLine>

              <AnimatedLine delay={0.38}>
                <p className="text-muted-foreground leading-relaxed">
                  We are a team of top-tier professionals delivering innovative, future-ready digital solutions. We specialize in IT, Cloud Computing, DevOps, Digital Marketing, and business support services designed to help companies operate more efficiently and scale with confidence.
                </p>
              </AnimatedLine>

              <AnimatedLine delay={0.46}>
                <p className="text-muted-foreground leading-relaxed">
                  Based in Gilgit-Baltistan, Pakistan, our expertise includes DevOps Engineering, Cloud Infrastructure, Software Development, Accounting & Bookkeeping, UI/UX Design, Video Editing, and operational support services.
                </p>
              </AnimatedLine>

              <AnimatedLine delay={0.54}>
                <p className="text-muted-foreground leading-relaxed">
                  Our approach combines technical expertise, structured execution, and scalable systems to solve real business challenges and support long-term growth.
                </p>
              </AnimatedLine>

              <AnimatedLine delay={0.62}>
                <p className="text-muted-foreground leading-relaxed">
                  We believe modern businesses need more than isolated services — they need reliable systems, strong execution, and a team capable of managing technology, operations, and growth under one roof.
                </p>
              </AnimatedLine>
            </div>

            {/* Stats with improved spacing */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-8 py-8 border-t border-border/50"
            >
              {stats.map((stat, i) => (
                <motion.div 
                  key={stat.label}
                  className="group relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 + i * 0.1 }}
                >
                  <div className="pl-4 border-l-2 border-accent/30 group-hover:border-accent transition-colors duration-300">
                    <span className="font-syne font-bold text-3xl md:text-4xl text-foreground group-hover:text-accent transition-colors duration-300 block mb-1">
                      {stat.number}
                    </span>
                    <span className="block text-sm font-medium text-foreground mb-1">{stat.label}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Image with unique frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="order-1 lg:order-2 relative"
            style={{
              x: mousePosition.x * -1,
              y: mousePosition.y * -1,
            }}
          >
            {/* Decorative frame */}
            <motion.div 
              className="absolute -top-4 -right-4 w-full h-full border border-accent/30"
              initial={{ opacity: 0, x: 20, y: -20 }}
              animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
            />
            
            <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
              <img
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1200&q=80"
                alt="Creative team at work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              
              {/* Corner decorations */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-accent/50" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-accent/50" />
            </div>
            
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -left-6 bottom-12 bg-background border border-border px-6 py-4 shadow-xl"
            >
              <span className="text-xs font-mono text-muted-foreground">ESTABLISHED</span>
              <span className="block font-syne font-bold text-3xl mt-1">2024</span>
            </motion.div>

            {/* Side label */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1 }}
              className="absolute -right-12 top-1/2 -translate-y-1/2 hidden xl:block"
              style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
            >
              <span className="text-xs font-mono text-muted-foreground tracking-widest">
                ENGINEERING SCALABLE DIGITAL SOLUTIONS
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
