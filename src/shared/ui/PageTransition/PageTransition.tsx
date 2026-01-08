import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
}

export const PageTransition = ({ children }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      style={{ width: '100%' }}
    >
      {children}
    </motion.div>
  );
};
