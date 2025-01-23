import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

const SkillsComponent = ({ boxes }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, scale: 1, transition: { duration: 0.8 } });
    } else {
      controls.start({ opacity: 0, scale: 0.5 });
    }
  }, [isInView, controls]);

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8 w-full">
      {boxes.map((item, index) => (
        <motion.div
          key={index}
          ref={ref}
          className="flex flex-col items-center justify-center p-3 md:p-4 rounded-full bg-[var(--bg-card)] shadow-lg w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 cursor-pointer"
          initial={{ opacity: 0, scale: 1 }}
          animate={controls}
          whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
          exit={{ opacity: 0, scale: 1 }} // Maintain normal size on exit
        >
          <item.icon
            className="text-[var(--accent-primary)] text-2xl sm:text-3xl rounded-full"
            size={{ h: "h-12 md:h-16 lg:h-20", w: "w-12 md:w-16 lg:w-20" }}
          />
          <p className="text-xs sm:text-sm font-bold text-center">
            {item.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillsComponent;
