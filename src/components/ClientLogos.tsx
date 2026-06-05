import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useState, useEffect } from 'react';

const clients = [
  { name: 'BeeNeural', logo: '/beeneural.png' },
  { name: 'ITC DANYORE', logo: '/itc-danyore.png' },
  { name: 'sheRozgar', logo: '/sherozgar.png' },
  { name: 'she dev', logo: '/she-dev.png' },
];

interface ClientLogosProps {
  title?: string;
  className?: string;
}

const ClientLogos = ({ title = 'Trusted by industry leaders', className = '' }: ClientLogosProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      setMousePosition({
        x: (clientX / innerWidth - 0.5) * 20,
        y: (clientY / innerHeight - 0.5) * 20
      });
      mouseX.set((clientX / innerWidth - 0.5) * 30);
      mouseY.set((clientY / innerHeight - 0.5) * 30);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Section Number */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="absolute top-0 left-0 flex items-center gap-4"
      >
        <span className="text-xs font-mono text-primary tracking-wider">07</span>
        <div className="w-12 h-[1px] bg-primary/30" />
        <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Partners</span>
      </motion.div>

      {/* Floating Geometric Shapes */}
      <motion.div
        className="absolute top-10 right-20 w-8 h-8 border border-primary/20 rotate-45"
        style={{ x: smoothX, y: smoothY }}
      />
      <motion.div
        className="absolute bottom-10 left-20 w-6 h-6 bg-accent/10 rounded-full"
        style={{ x: smoothX, y: smoothY }}
      />

      <div className="pt-12">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">
              {title}
            </h3>
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto" />
          </motion.div>
        )}
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-16"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="group relative p-4"
            >
              {/* Hover border effect */}
              <div className="absolute inset-0 border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              
              {/* Corner accents on hover */}
              <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-transparent group-hover:border-primary/40 transition-colors duration-300" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-transparent group-hover:border-primary/40 transition-colors duration-300" />
              
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="h-8 md:h-10 w-auto max-w-[160px] object-contain opacity-70 group-hover:opacity-100 transition-all duration-500"
              />
              
              {/* Client name tooltip */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs font-mono text-primary whitespace-nowrap">{client.name}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ClientLogos;