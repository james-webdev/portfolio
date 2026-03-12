import { useEffect, useRef, useState } from "react";

const ScrollAnimation = ({ animateIn, children }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const classes = visible ? animateIn : "";

  return (
    <div
      ref={ref}
      className={`animate__animated ${classes}`}
      style={{ opacity: visible ? 1 : 0 }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
