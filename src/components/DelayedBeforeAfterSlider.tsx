'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BeforeAfterSlider from './BeforeAfterSlider';

interface DelayedBeforeAfterSliderProps {
  before: string;
  after: string;
  alt: string;
}

const DelayedBeforeAfterSlider: React.FC<DelayedBeforeAfterSliderProps> = ({ before, after, alt }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      {isVisible && <BeforeAfterSlider before={before} after={after} alt={alt} />}
    </motion.div>
  );
};

export default DelayedBeforeAfterSlider;