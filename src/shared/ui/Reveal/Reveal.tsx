import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const Reveal = ({ 
  children, 
  width = 'fit-content', 
  delay = 0.25, 
  duration = 0.5,
  y = 20,
  className,
  style
}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden', ...style }} className={className}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: y, scale: 0.98 },
          visible: { opacity: 1, y: 0, scale: 1 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ 
          duration, 
          delay, 
          ease: [0.19, 1, 0.22, 1]
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
