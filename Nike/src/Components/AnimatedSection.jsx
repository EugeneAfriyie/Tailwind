import React from 'react';
import useOnScreen from './useOnScreen';

const AnimatedSection = ({ children, threshold = 0.5, animationClass = 'animate-slide-up' }) => {
  const [ref, isVisible] = useOnScreen(threshold);

  return (
    <section
      ref={ref}
      className={`transition-all duration-500 ${isVisible ? animationClass : 'opacity-0'}`}
    >
      {children}
    </section>
  );
};

export default AnimatedSection;
