import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring, animate } from "framer-motion";

interface AnimatedCounterProps {
  from?: number;
  to: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ from = 0, to, prefix = "", suffix = "", className }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(from);
  const rounded = useSpring(count, { damping: 30, stiffness: 100 });

  useEffect(() => {
    if (inView) {
      const animation = animate(count, to, {
        duration: 2,
        ease: "easeOut"
      });
      return animation.stop;
    }
  }, [inView, count, to]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Math.round(latest)}${suffix}`;
      }
    });
    return () => unsubscribe();
  }, [rounded, prefix, suffix]);

  return <span ref={ref} className={className} />;
};

export default AnimatedCounter;
